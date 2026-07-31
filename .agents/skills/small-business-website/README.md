# Small Business Website Builder — Claude Code Skill

A Claude Code skill that guides the full workflow of building a polished, mobile-first static marketing website for any small business — from discovery interview through deployment.

## What it does

This skill orchestrates a 7-phase workflow:

1. **Discovery Interview** — Gather business info, brand vibe, and content
2. **Competitive Research** — Analyze top 10 sites in the same category using parallel agents
3. **Brainstorm & Design Direction** — Explore 2-3 design directions with palette + font pairings
4. **Plan the Build** — Create a detailed implementation plan with section specs
5. **Build** — Implement using parallel sub-agents for independent sections, with self-checks after every code change
6. **UI/UX Review Cycles** — Iterative improvement with mobile + desktop review agents
7. **Deploy** — Git + GitHub + Vercel auto-deploy

## Tech stack (for generated sites)

- Static HTML + CSS + JS (no build step, no framework)
- Tailwind CSS via CDN
- Google Fonts
- Vanilla JavaScript
- Deployed on Vercel

## Installation

Copy the skill into your Claude Code skills directory:

```bash
# Create the skill directory
mkdir -p ~/.claude/skills/small-business-website/references

# Copy the files
cp SKILL.md ~/.claude/skills/small-business-website/
cp references/technical-patterns.md ~/.claude/skills/small-business-website/references/
```

Or clone this repo directly:

```bash
git clone https://github.com/YOUR_USERNAME/small-business-website-skill.git ~/.claude/skills/small-business-website
```

## Dependencies

This skill works best with the following Claude Code plugins/skills installed:

- **superpowers** — brainstorming, writing-plans, dispatching-parallel-agents, requesting-code-review, verification-before-completion
- **ui-ux-pro-max** — Color palettes, font pairings, UX guidelines
- **frontend-design** — Production-grade frontend aesthetics

The skill will still work without these, but the workflow will be less automated.

## Usage

Just tell Claude Code you want to build a website for a business:

- "Build me a website for my cafe"
- "I need a site for my salon"
- "Make a homepage for my restaurant"

The skill activates automatically and walks you through the full workflow.

## Files

```
small-business-website/
├── SKILL.md                          # Main skill definition (7 phases)
├── references/
│   └── technical-patterns.md         # Mobile patterns, CSS recipes, gotchas
└── README.md                         # This file
```
