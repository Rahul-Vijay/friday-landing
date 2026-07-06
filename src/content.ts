// Waitlist CTAs open the email-capture modal (WaitlistModal.astro). This
// mailto is the no-JS fallback and the target of the modal's own fallback.
export const waitlistUrl =
  "mailto:hello@friday.dev?subject=Join%20the%20Friday%20waitlist";

// Where the waitlist modal POSTs emails as JSON ({ email }). This is the
// Google Apps Script web app from scripts/waitlist-apps-script.gs; it appends
// each signup to the "Friday waitlist" Google Sheet. If it's ever emptied,
// the modal falls back to opening a prefilled email, so no signup is lost.
export const waitlistEndpoint =
  "https://script.google.com/macros/s/AKfycbxlPYFrRHFsEXlQaRHUyJvc8lMybTmmSS2167rdi0Jmdn4ryPvcrXVY14Q3FjAI9wMxKg/exec";

export interface Feature {
  icon: string;
  title: string;
  body: string;
}

export const features: Feature[] = [
  {
    icon: `<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="5" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M7.2 12h2.8M11 12l6-5.6M11 12l6 5.6"/></svg>`,
    title: "Right agent, every task",
    body: "Design, code, review, research: every task lands with the model that's strongest at it. You never pick a model again.",
  },
  {
    icon: `<svg viewBox="0 0 24 24"><path d="M20 11A8 8 0 1 0 18.5 16.5"/><path d="M20 5v6h-6"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Loops until verified",
    body: "Friday reviews the crew's work and sends back anything broken, so you're never handed something half-done.",
  },
  {
    icon: `<svg viewBox="0 0 24 24"><line x1="5" y1="4" x2="5" y2="20"/><circle cx="5" cy="9" r="2.2"/><line x1="12" y1="4" x2="12" y2="20"/><circle cx="12" cy="15" r="2.2"/><line x1="19" y1="4" x2="19" y2="20"/><circle cx="19" cy="7" r="2.2"/></svg>`,
    title: "Built to your taste",
    body: "Nudge it with a word. Friday keeps your style across the whole job.",
  },
  {
    icon: `<svg viewBox="0 0 24 24"><rect x="3" y="8" width="12" height="10" rx="2.5"/><rect x="9" y="4" width="12" height="10" rx="2.5"/></svg>`,
    title: "A workspace for every job",
    body: "Research, coding, marketing, sales. Each goal gets its own workspace and crew, all running at once.",
  },
  {
    icon: `<svg viewBox="0 0 24 24"><path d="M3 9V4h5"/><path d="M21 9V4h-5"/><path d="M3 15v5h5"/><path d="M21 15v5h-5"/></svg>`,
    title: "One infinite canvas",
    body: "Every agent, browser, and note spread out where you can see them. Pan around, jump in anytime.",
  },
  {
    icon: `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
    title: "Your subscriptions, local-first",
    body: "Bring your own Claude and Codex subscriptions, or API keys. Everything stays on your machine; nothing passes through our servers.",
  },
];

export interface Step {
  num: string;
  title: string;
  body: string;
}

export const steps: Step[] = [
  {
    num: "1",
    title: "Set the goal",
    body: "A research brief, an app, a marketing site, a sales page. Say it in plain words.",
  },
  {
    num: "2",
    title: "Friday staffs the job",
    body: "Each task goes to whichever model does it best, and they all run side by side.",
  },
  {
    num: "3",
    title: "It loops until done",
    body: "Build, verify, fix, repeat, until the goal is met the way you want it.",
  },
];

export const tools: string[] = [
  "Claude Code",
  "Codex",
  "OpenCode",
  "Gemini CLI",
  "Cursor CLI",
  "Aider",
  "Amp",
];

export interface Plan {
  name: string;
  price: string;
  term: string;
  features: string[];
  cta: string;
  micro: string;
}

export const plans: Plan[] = [
  {
    name: "Founding license",
    price: "50% off",
    term: "first 100 users",
    features: [
      "One-time payment, no subscription",
      "Unlimited goals and agents",
      "Auto-routing across models",
      "Self-verifying loop",
      "Every future update",
      "macOS & Windows (Linux soon)",
    ],
    cta: "Join the waitlist",
    micro: "No card needed to join · Bring your own subscriptions",
  },
];
