'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    // Handle mobile menu scroll freeze (Lenis stop/start)
    useEffect(() => {
        const handleMenuToggle = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (lenisRef.current) {
                if (customEvent.detail?.open) {
                    lenisRef.current.stop();
                } else {
                    lenisRef.current.start();
                }
            }
        };

        window.addEventListener('menuToggle', handleMenuToggle);
        return () => {
            window.removeEventListener('menuToggle', handleMenuToggle);
        };
    }, []);

    return null;
}
