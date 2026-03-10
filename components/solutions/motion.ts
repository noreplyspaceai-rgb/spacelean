export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});
