const SECTIONS = ['home', 'about', 'projects', 'skills', 'contact'];

const HELP_OUTPUT = [
  "Available commands:",
  "-----------------------------------",
  "help                        - shows this list of commands",
  "ls                          - lists available pages/sections",
  "whoami                      - displays a quick bio",
  "clear                       - clears the terminal",
  "cat resume.pdf              - displays or downloads resume",
  "history                     - shows previously run commands",
  "matrix                      - fun matrix rain effect",
  "hack                        - fun hacking simulation effect",
  "contact                     - opens the contact page",
  "typing                      - toggles typing animation (desktop)",
  "-----------------------------------",
  "You can also type a section name to navigate:",
  "home, about, projects, skills, contact",
];

const WHOAMI_OUTPUT = [
  "echo 'whoami'",
  "-----------------------------------",
  "Name: Myx Peace",
  "Role: Software Developer",
  "-----------------------------------",
  "I am a passionate software developer with experience in building web applications.",
  "My skills include JavaScript, React, Node.js, and more.",
  "I love creating fun, interactive, and user friendly applications.",
  "-----------------------------------",
  "Type 'help' to see all available commands.",
];

const LS_OUTPUT = [
  "ls ~/portfolio/",
  "-----------------------------------",
  "- home",
  "- about",
  "- projects",
  "- skills",
  "- contact",
  "-----------------------------------",
  "Type a section name to navigate there.",
];

const RESUME_OUTPUT = [
  "cat resume.pdf",
  "-----------------------------------",
  "MYX PEACE",
  "dochasachmyx@gmail.com | Florissant, MO",
  "-----------------------------------",
  " ",
  "Overview:",
  "Front end and full-stack software developer with UX and",
  "accessibility focus. Experienced with MERN (MongoDB, Express,",
  "React, Node) and modern JavaScript application design.",
  "Background includes curriculum development, technical coaching",
  "for cohorts of 300+ learners, and client work delivering",
  "accessible, SEO-aware web experiences.",
  " ",
  "Technical Skills:",
  "- Frontend: React, JavaScript, HTML5, CSS3, responsive design",
  "- Backend: Node.js, Express, MongoDB, RESTful patterns, SQL",
  "- Accessibility: WCAG-informed design, usability testing",
  "- Tools: Git/GitHub, WordPress, Microsoft 365",
  "- Practices: Code review, QA, refactoring, SEO optimization",
  " ",
  "Experience:",
  "- Subject Matter Expert Facilitator | Kenzie Academy (2020-2022)",
  "  Managed data for 300+ learners across MERN/CyberSecurity programs.",
  "  Designed databases; conducted QA on datasets and code.",
  " ",
  "- UX/UI Project-Based Training | Kenzie Academy (2020-2022)",
  "  Coached on UX/frontend; built project databases and QA'd code.",
  "  Identified accessibility gaps and influenced inclusive design.",
  " ",
  "- Project Manager & Lead Dev | Freelance - Olde Town Arvada (2020-2021)",
  "  Redesigned client site with WordPress, custom themes, and code.",
  "  Restructured information architecture and measured SEO impact.",
  " ",
  "Education:",
  "- Front End Developer Certificate | Kenzie Academy | 2021",
  "- UX Design Certificate | Kenzie Academy | 2020",
  "-----------------------------------",
];

function result(output, overrides) {
  return { output, navigate: null, clear: false, effect: null, ...overrides };
}

function navigateTo(section) {
  const path = section === 'home' ? '/' : `/${section}`;
  return result([`Navigating to ${section}...`], { navigate: path });
}

export function processCommand(input, commandHistory) {
  const trimmed = input.trim().toLowerCase();
  const raw = input.trim();

  if (!trimmed) return result([]);

  if (trimmed === 'help') return result(HELP_OUTPUT);
  if (trimmed === 'whoami') return result(WHOAMI_OUTPUT);
  if (trimmed === 'ls') return result(LS_OUTPUT);
  if (trimmed === 'cat resume.pdf') return result(RESUME_OUTPUT);
  if (trimmed === 'clear') return result([], { clear: true });

  if (trimmed === 'history') {
    const lines = commandHistory.length > 0
      ? commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`)
      : ["No commands in history."];
    return result(lines);
  }

  if (trimmed === 'matrix') return result(["Initiating matrix rain..."], { effect: 'matrix' });
  if (trimmed === 'hack') return result(["Initiating hack sequence..."], { effect: 'hack' });

  if (trimmed === 'typing' || trimmed === 'typing on' || trimmed === 'typing off') {
    const arg = trimmed === 'typing on' ? 'on' : trimmed === 'typing off' ? 'off' : 'toggle';
    return result([], { action: 'typing', typingArg: arg });
  }

  // Navigate by section name or "cd <section>"
  const cdMatch = trimmed.match(/^cd\s+(.+)$/);
  const section = cdMatch ? cdMatch[1] : trimmed;
  if (SECTIONS.includes(section)) return navigateTo(section);

  return result([`Command not found: ${raw}`, "Type 'help' for available commands."]);
}
