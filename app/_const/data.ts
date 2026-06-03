export const aboutCards = [
  { label: "Location", value: "Pokhara, Nepal" },
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Experience", value: "1 year professional" },
  { label: "Current Focus", value: "Backend systems and AI workflows" },
];

export const stats = [
  { v: "3+ yr", l: "Frontend journey" },
  { v: "1 yr", l: "Professional experience" },
  { v: "6 mo", l: "Backend deep dive" },
];

export const marqueeItems = [
  { label: "Full-Stack Development", icon: "/icons/fullstack.svg" },
  { label: "JavaScript", icon: "/icons/javascript.svg" },
  { label: "React.js", icon: "/icons/react.svg" },
  { label: "Next.js", icon: "/icons/next.svg" },
  { label: "Python", icon: "/icons/python.svg" },
  { label: "FastAPI", icon: "/icons/fastapi.svg" },
  { label: "Node.js", icon: "/icons/node.svg" },
  { label: "NestJS", icon: "/icons/nestjs.svg" },
  { label: "PostgreSQL", icon: "/icons/postgres.svg" },
  { label: "LLMs", icon: "/icons/llm.svg" },
];

export const skills = [
  {
    cat: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    cat: "Backend",
    items: ["FastAPI", "Node.js", "Express.js", "NestJS"],
  },
  {
    cat: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    cat: "Programming & AI",
    items: ["Python", "Web Automation", "LLMs (learning phase)"],
  },
  {
    cat: "Tools & Platforms",
    items: ["Supabase", "Git", "GitHub", "Docker (currently exploring)"],
  },
];

export const personalProjects = [
  {
    id: "p1",
    kind: "personal",
    name: "Job Portal",
    desc: "Job Portal is a web app built with React, FastAPI, and Celery with role-based authentication (Candidate, Employer, Admin), async task processing, CV parsing, embedding-based candidate-job matching, and HMAC signature validation for secure APIs.",
    tags: ["OAuth", "Embedding", "HMAC Verification", "Async Task Processing"],
    year: "2026",
    image: "/jobPortal.png",
    url: "https://github.com/samiradh058/Job-Portal-v2",
  },
  {
    id: "p2",
    kind: "personal",
    name: "SmartFarm 360",
    desc: "Smart Farm 360 is a smart farming platform built with Next.js and NestJS featuring crop recommendation based on soil and weather data, fertilizer recommendation, disease prediction, and farm inventory management.",
    tags: [
      "Next.js",
      "NestJS",
      "Genetic Algorithm",
      "ML-based Disease Prediction",
    ],
    year: "2025",
    image: "/smartFarm.png",
    url: "https://github.com/samiradh058/Smart-Farming-Decision-and-Inventory-Management/tree/feature/web",
  },
  {
    id: "p3",
    kind: "personal",
    name: "AI Platform",
    desc: "AI Platform is a full-stack AI web app built using React.js and FastAPI with three tools: a JWT-authenticated Flight AI with LLM tool-calling and search history, an Argumentative AI for real-time streaming debates, and a Brochure Maker that generates downloadable marketing content from the website URL.",
    tags: ["Tool-Calling", "Streaming Responses", "JWT Authentication"],
    year: "2026",
    image: "/ai_platform.png",
    url: "https://github.com/samiradh058/AI-Platform",
  },
];

export const professionalProjects = [
  {
    id: "w1",
    name: "Internet Banking",
    icon: "mdi:bank-transfer",
    desc: "End-to-end delivery of a secure online banking platform with money transfers, remittance, top-ups, Rav-kav, and other core features, backed by robust security controls.",
    tags: ["HMAC verification", "JWT auth"],
    image: "/ibank.png",
  },
  {
    id: "w2",
    name: "Card Mgnt. System",
    icon: "mdi:credit-card",
    desc: "Comprehensive card management system for all card-related activities including assigning cards, changing status, setting fees, setting limits, and more.",
    tags: ["Typescript", "Tailwind"],
    image: "/cms.png",
  },
  {
    id: "w3",
    name: "Core Banking System",
    icon: "mdi:bank",
    desc: "A robust core banking system handling account management, transaction processing, and customer data management with high reliability and security.",
    tags: ["Angular.js"],
    image: "/cbs.png",
  },
  {
    id: "w4",
    name: "Saloon Management System",
    icon: "mdi:scissors-cutting",
    desc: "Salon Management System is a comprehensive solution that integrates billing, appointment scheduling,inventory, service, and staff management and transaction tracking. The system is currently in the deployment and client onboarding phase for use in a real business environment.",
    tags: ["React.js", "FastAPI"],
  },
];

export const workExperience = [
  {
    company: "WOW Finstack Nepal",
    website: "https://wowfinstacknepal.com/",
    location: "Nayabazar, Pokhara",
    from: "May 2025",
    to: "May 2026",
    summary:
      "Frontend developer responsible for the commercial banking projects listed below: Internet Banking, Card Management, and Core Banking System.",
  },
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/samiradh058",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samir-adhikari-32ba07282/",
    icon: "mdi:linkedin",
  },
];
