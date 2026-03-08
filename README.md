# Ethical Hacking Roadmap: Complete Learning Guide

A comprehensive, interactive web-based learning platform designed to guide aspiring ethical hackers from beginner to advanced levels. This roadmap provides a structured 24-month learning path with practical labs, tools, resources, and progress tracking for bug bounty hunting, CTF competitions, penetration testing, and security research.

**Live Website:** [https://ethhackmap-a6twz7ku.manus.space/](https://ethhackmap-a6twz7ku.manus.space/)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Technology Stack](#technology-stack)
6. [Installation & Development](#installation--development)
7. [Usage Guide](#usage-guide)
8. [Roadmap Stages](#roadmap-stages)
9. [Learning Resources](#learning-resources)
10. [Contributing](#contributing)
11. [License](#license)

---

## Overview

The **Ethical Hacking Roadmap** is an interactive learning platform that transforms a comprehensive security training curriculum into an accessible, searchable web application. Built for university students and aspiring security professionals, this platform provides:

- **Six progressive learning stages** from beginner fundamentals to advanced CTF competition mastery
- **Interactive progress tracking** with persistent storage to monitor learning journey
- **Searchable content** across all topics, tools, labs, and resources
- **24-month structured timeline** with month-by-month learning objectives
- **Curated tools and platforms** with recommendations for each stage
- **Real-world project ideas** and practical exercises

This platform is designed for students who can dedicate 3–5 hours daily to cybersecurity learning and aspire to become proficient in ethical hacking, bug bounty hunting, penetration testing, and security research.

---

## Features

### 1. **Interactive Learning Stages**

The roadmap is organized into six progressive stages, each with:

- **Core Topics:** Essential knowledge areas with detailed explanations
- **Practical Labs:** Hands-on exercises from platforms like TryHackMe, Hack The Box, and OverTheWire
- **Recommended Tools:** Security tools relevant to each stage with usage guidance
- **Mini-Projects:** Real-world projects to build portfolio-worthy skills
- **Common Mistakes:** Warnings about pitfalls to avoid during learning

### 2. **Progress Tracking System**

- **Interactive Checkboxes:** Mark topics, labs, and projects as complete
- **Progress Bars:** Visual indicators for overall progress and stage-level completion
- **Statistics Dashboard:** Real-time metrics showing:
  - Overall learning progress (0-100%)
  - Completed stages count
  - Total items completed
  - Items remaining
- **Persistent Storage:** All progress is saved to browser localStorage and persists across sessions
- **Reset Functionality:** Option to clear progress and start fresh

### 3. **Powerful Search Functionality**

- **Full-text Search:** Search across all topics, tools, labs, resources, and platforms
- **Real-time Results:** Instant filtering as you type
- **Smart Filtering:** Results organized by stage and content type
- **Quick Navigation:** Click results to jump to relevant sections

### 4. **Timeline View**

- **24-Month Learning Plan:** Month-by-month breakdown of learning objectives
- **Structured Progression:** Clear milestones and skill development targets
- **Flexible Pacing:** Guidance for accelerating or extending the timeline

### 5. **Resource Hub**

- **Curated Tools:** Security tools with descriptions and learning resources
- **Practice Platforms:** Links to TryHackMe, Hack The Box, OverTheWire, and more
- **External Resources:** Recommended blogs, courses, and documentation

### 6. **Responsive Design**

- **Mobile-Optimized:** Full functionality on smartphones, tablets, and desktops
- **Dark Mode Support:** Easy on the eyes for extended study sessions
- **Smooth Animations:** Polished interactions and transitions
- **Accessibility:** Keyboard navigation and screen reader support

---

## Getting Started

### Quick Start

1. **Visit the Website:** Open [https://ethhackmap-a6twz7ku.manus.space/](https://ethhackmap-a6twz7ku.manus.space/) in your browser
2. **Explore Stages:** Click on any learning stage to expand and view detailed content
3. **Mark Progress:** Check off topics, labs, and projects as you complete them
4. **Track Statistics:** Monitor your progress with the dashboard at the top
5. **Search Content:** Use the search bar to find specific topics or tools

### For Developers

See the [Installation & Development](#installation--development) section below to set up a local development environment.

---

## Project Structure

```
ethical_hacking_roadmap/
├── client/
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── Hero.tsx        # Hero section with CTA
│   │   │   ├── ProgressBar.tsx # Overall progress indicator
│   │   │   ├── ProgressStats.tsx # Statistics dashboard
│   │   │   ├── StageCard.tsx   # Expandable stage cards
│   │   │   ├── SearchResults.tsx # Search results display
│   │   │   └── TimelineView.tsx # 24-month timeline
│   │   ├── contexts/           # React contexts
│   │   │   ├── ThemeContext.tsx # Theme management
│   │   │   └── ProgressContext.tsx # Progress tracking
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useSearch.ts    # Search functionality
│   │   ├── lib/                # Utilities and data
│   │   │   └── roadmapData.ts  # Roadmap content data
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx        # Main landing page
│   │   │   └── NotFound.tsx    # 404 page
│   │   ├── App.tsx             # Root component
│   │   ├── main.tsx            # React entry point
│   │   └── index.css           # Global styles
│   └── index.html              # HTML template
├── server/                     # Backend server (placeholder)
├── shared/                     # Shared types (placeholder)
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## Technology Stack

### Frontend

- **React 19:** Modern UI library with hooks and concurrent features
- **TypeScript:** Type-safe JavaScript for reliability
- **Tailwind CSS 4:** Utility-first CSS framework for responsive design
- **shadcn/ui:** High-quality React components built on Radix UI
- **Framer Motion:** Smooth animations and transitions
- **Wouter:** Lightweight client-side routing
- **Lucide React:** Beautiful icon library

### Development Tools

- **Vite:** Lightning-fast build tool and dev server
- **pnpm:** Fast, disk-space efficient package manager
- **TypeScript Compiler:** Type checking and compilation
- **Prettier:** Code formatting

### Hosting

- **Manus Platform:** Managed hosting with custom domain support

---

## Installation & Development

### Prerequisites

- Node.js 18+ and pnpm 10+
- Git for version control

### Local Setup

1. **Clone the Repository**

```bash
git clone <repository-url>
cd ethical_hacking_roadmap
```

2. **Install Dependencies**

```bash
pnpm install
```

3. **Start Development Server**

```bash
pnpm dev
```

The application will be available at `http://localhost:3000/`

4. **Build for Production**

```bash
pnpm build
```

5. **Preview Production Build**

```bash
pnpm preview
```

### Environment Variables

No environment variables are required for the static frontend. The application uses browser localStorage for progress tracking.

---

## Usage Guide

### Navigating the Platform

1. **Hero Section:** Start with the "Explore the Roadmap" button to jump to the main content
2. **Progress Bar:** View your overall learning progress at the top of the page
3. **Statistics:** Check your progress metrics (overall %, completed stages, items done/remaining)
4. **Stage Cards:** Click any stage to expand and view detailed content
5. **Search:** Use the search bar to find specific topics, tools, or resources
6. **Timeline:** Switch to the Timeline tab to see the 24-month learning plan
7. **Resources:** Browse recommended tools and practice platforms

### Marking Progress

1. **Expand a Stage:** Click on any learning stage card to expand it
2. **Check Items:** Click the checkbox next to any topic, lab, or project to mark it complete
3. **View Progress:** Watch the progress bar update in real-time
4. **Track Statistics:** See your progress reflected in the statistics dashboard
5. **Reset Progress:** Click the "Reset" button in the progress bar to clear all progress

### Searching Content

1. **Open Search:** Click the search icon or start typing in the search bar
2. **Enter Query:** Type keywords (e.g., "Python", "Web Security", "Burp Suite")
3. **View Results:** See matching topics, tools, and resources organized by stage
4. **Navigate:** Click any result to jump to that section

---

## Roadmap Stages

### Stage 1: Beginner Foundation (Months 1-2)

**Duration:** 2 months | **Difficulty:** Beginner

Master the fundamentals of computer science, networking, and Linux. This stage builds the essential knowledge required for all subsequent learning.

**Key Topics:**
- Computer fundamentals and hardware basics
- Networking essentials (OSI model, TCP/IP)
- Linux command line and file systems
- Basic scripting and automation

**Outcomes:** Comfortable with Linux, understand networking basics, write simple scripts

---

### Stage 2: Networking & System Fundamentals (Months 3-4)

**Duration:** 2 months | **Difficulty:** Beginner-Intermediate

Deepen your understanding of networking protocols, system architecture, and network analysis tools.

**Key Topics:**
- Advanced networking concepts
- Network protocols and packet analysis
- System administration basics
- Network reconnaissance tools

**Outcomes:** Analyze network traffic, perform network reconnaissance, understand system architecture

---

### Stage 3: Web Security & Bug Bounty Skills (Months 5-7)

**Duration:** 3 months | **Difficulty:** Intermediate

Learn web application security, common vulnerabilities, and bug bounty methodology.

**Key Topics:**
- OWASP Top 10 vulnerabilities
- Web application testing
- SQL injection and XSS attacks
- Bug bounty hunting strategies

**Outcomes:** Identify web vulnerabilities, write effective bug reports, participate in bug bounty programs

---

### Stage 4: Offensive Security & Exploitation (Months 8-9)

**Duration:** 2 months | **Difficulty:** Intermediate-Advanced

Master exploitation techniques, privilege escalation, and offensive security methodologies.

**Key Topics:**
- Exploit development basics
- Privilege escalation techniques
- Post-exploitation strategies
- Metasploit framework

**Outcomes:** Develop and execute exploits, escalate privileges, conduct post-exploitation

---

### Stage 5: Advanced Hacking & Reverse Engineering (Months 10-11)

**Duration:** 2 months | **Difficulty:** Advanced

Explore advanced topics including cryptography, reverse engineering, and binary analysis.

**Key Topics:**
- Cryptography fundamentals
- Reverse engineering and binary analysis
- Advanced exploitation techniques
- Malware analysis basics

**Outcomes:** Reverse engineer binaries, analyze cryptographic systems, understand malware behavior

---

### Stage 6: CTF / Competition Level Skills (Months 12)

**Duration:** 1 month | **Difficulty:** Advanced

Prepare for CTF competitions and advanced security research with competition-level challenges.

**Key Topics:**
- CTF competition strategies
- Advanced exploitation chains
- Security research methodologies
- Red team operations

**Outcomes:** Compete in CTF competitions, conduct security research, operate as a red team member

---

## Learning Resources

### Recommended Practice Platforms

| Platform | Best For | Difficulty | Cost |
|----------|----------|-----------|------|
| **TryHackMe** | Guided learning with structured paths | Beginner-Intermediate | Free + Premium |
| **Hack The Box** | Real-world penetration testing scenarios | Intermediate-Advanced | Free + Premium |
| **OverTheWire** | Wargames and CTF challenges | Beginner-Advanced | Free |
| **PortSwigger Web Security Academy** | Web security fundamentals | Beginner-Intermediate | Free |
| **PicoCTF** | CTF competitions for beginners | Beginner-Intermediate | Free |
| **DEFCON CTF** | Elite CTF competition | Advanced | Invitation |

### Essential Tools

| Tool | Purpose | Stage | Cost |
|------|---------|-------|------|
| **Kali Linux** | Penetration testing distribution | All | Free |
| **Nmap** | Network reconnaissance | Stage 2+ | Free |
| **Wireshark** | Network protocol analysis | Stage 2+ | Free |
| **Burp Suite** | Web application testing | Stage 3+ | Free + Pro |
| **Metasploit** | Exploitation framework | Stage 4+ | Free |
| **Ghidra** | Reverse engineering tool | Stage 5+ | Free |

### Learning Resources

- **OWASP Top 10:** [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/)
- **HackTricks:** [https://book.hacktricks.xyz/](https://book.hacktricks.xyz/)
- **PayloadsAllTheThings:** [https://github.com/swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- **IppSec YouTube Channel:** [https://www.youtube.com/c/IppSec](https://www.youtube.com/c/IppSec)
- **John Hammond YouTube Channel:** [https://www.youtube.com/c/JohnHammond](https://www.youtube.com/c/JohnHammond)

---

## Weekly Practice Routine

For students studying 3–5 hours daily, here's a recommended weekly schedule:

### Daily Routine (3-5 hours)

- **1 hour:** Theory and concept learning (videos, documentation)
- **1.5-2 hours:** Hands-on lab practice (TryHackMe, Hack The Box)
- **0.5-1 hour:** Tool experimentation and mini-projects
- **0.5 hour:** Reading security blogs or research papers

### Weekly Structure

| Day | Focus | Activities |
|-----|-------|-----------|
| Monday | Theory | Learn new concepts, watch tutorials |
| Tuesday | Labs | Complete TryHackMe or HTB machines |
| Wednesday | Tools | Experiment with security tools |
| Thursday | CTF | Solve CTF challenges |
| Friday | Projects | Work on mini-projects |
| Saturday | Review | Review the week, read security blogs |
| Sunday | Planning | Plan next week's learning |

---

## Building a Hacker Portfolio

A strong cybersecurity portfolio is essential for landing jobs and opportunities. Here's how to build one:

### GitHub Repository

Create a public GitHub repository with:

1. **Security Projects:** Original security tools, scripts, and utilities
2. **CTF Write-ups:** Detailed walkthroughs of CTF challenges you've solved
3. **Vulnerability Reports:** Documentation of vulnerabilities you've discovered
4. **Research Notes:** Security research and analysis

### Write-ups and Documentation

- Write detailed CTF write-ups explaining your approach and solutions
- Document vulnerability discoveries with proof-of-concept code
- Share security research findings and analysis
- Contribute to open-source security projects

### Bug Bounty Reports

- Document all bug bounty submissions with:
  - Clear vulnerability description
  - Impact assessment
  - Proof-of-concept
  - Remediation recommendations

### Personal Blog

- Share security insights and learnings
- Publish CTF write-ups
- Discuss security trends and tools
- Build your personal brand

---

## Becoming Elite

### Join Cybersecurity Communities

- **Discord Servers:** Join security-focused Discord communities
- **CTF Teams:** Join or form a CTF team to compete together
- **Conferences:** Attend security conferences (Black Hat, DEF CON, etc.)
- **Meetups:** Participate in local cybersecurity meetups

### Learn from Real Vulnerabilities

- **CVE Databases:** Study real-world CVEs and exploits
- **Security Advisories:** Follow vendor security bulletins
- **Exploit-DB:** Learn from published exploits
- **GitHub Security:** Study security research on GitHub

### Enter Bug Bounty Programs

- **HackerOne:** [https://www.hackerone.com/](https://www.hackerone.com/)
- **Bugcrowd:** [https://www.bugcrowd.com/](https://www.bugcrowd.com/)
- **Intigriti:** [https://www.intigriti.com/](https://www.intigriti.com/)
- **Synack:** [https://www.synack.com/](https://www.synack.com/)

### Prepare for International Competitions

- **DEF CON CTF:** Elite international CTF competition
- **CSAW CTF:** Academic cybersecurity competition
- **Cyber Grand Challenge:** DARPA autonomous hacking competition
- **HITB CTF:** International CTF with high prestige

---

## Contributing

We welcome contributions to improve this roadmap. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add improvement'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

### Areas for Contribution

- Additional resources and tool recommendations
- New mini-projects and lab exercises
- Improved explanations and content clarity
- Bug fixes and performance improvements
- Accessibility enhancements

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support & Feedback

For questions, feedback, or suggestions:

- **GitHub Issues:** Report bugs or suggest features
- **Email:** Contact the maintainers
- **Discussions:** Join community discussions

---

## Acknowledgments

This roadmap was created as a comprehensive guide for aspiring ethical hackers and security professionals. It draws inspiration from industry best practices, community resources, and real-world penetration testing methodologies.

**Last Updated:** March 2026

**Version:** 1.0.0

---

## Quick Links

- **Live Website:** [https://ethhackmap-a6twz7ku.manus.space/](https://ethhackmap-a6twz7ku.manus.space/)
- **GitHub Repository:** [Link to repository]
- **Report Issues:** [GitHub Issues]
- **Contribute:** [Contributing Guide]

---

*Built with ❤️ for the cybersecurity community*
