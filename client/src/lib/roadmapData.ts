export interface Topic {
  name: string;
  description: string;
}

export interface Stage {
  id: number;
  title: string;
  description: string;
  duration: string;
  topics: Topic[];
  explanation: string[];
  labs: string[];
  tools: string[];
  platforms: string[];
  projects: string[];
  mistakes: string[];
}

export interface TimelineEntry {
  months: string;
  stage: string;
  goals: string[];
  labs: string[];
  projects: string[];
  ctf: string;
}

export const stages: Stage[] = [
  {
    id: 1,
    title: "Beginner Foundation",
    description: "Building a solid understanding of fundamental computer science concepts",
    duration: "1-2 months",
    topics: [
      {
        name: "Computer Fundamentals",
        description: "Operating Systems, Memory Management, File Systems, Processes, Threads"
      },
      {
        name: "Networking Basics",
        description: "OSI Model, TCP/IP, IP Addressing, Ports, Common Protocols"
      },
      {
        name: "Linux Fundamentals",
        description: "CLI, FHS, Basic commands, File permissions, User management"
      }
    ],
    explanation: [
      "Understanding how operating systems manage hardware and software resources is essential for identifying vulnerabilities.",
      "The OSI Model and TCP/IP Model provide a conceptual framework for how networks function.",
      "Linux is the operating system of choice for many cybersecurity professionals due to its flexibility."
    ],
    labs: [
      "Operating System Installation in VirtualBox/VMware",
      "OverTheWire Bandit Wargame",
      "Network Configuration exercises",
      "File System Exploration"
    ],
    tools: [
      "VirtualBox",
      "VMware Workstation Player",
      "Ubuntu/Fedora/Debian",
      "Bash/Zsh"
    ],
    platforms: [
      "OverTheWire (Bandit)",
      "TryHackMe (Pre-Security path)",
      "Hack The Box Academy"
    ],
    projects: [
      "Simple Bash scripts for automation",
      "Basic network scanner using ping/nmap",
      "Linux hardening checklist"
    ],
    mistakes: [
      "Skipping fundamentals and rushing into advanced tools",
      "Avoiding the Linux command line",
      "Lack of consistent practice",
      "Underestimating networking knowledge"
    ]
  },
  {
    id: 2,
    title: "Networking & System Fundamentals",
    description: "Deepening understanding of networking and OS internals for vulnerability identification",
    duration: "2-3 months",
    topics: [
      {
        name: "Advanced Networking",
        description: "Network services, Firewalls, VPNs, Wireless networking, Packet analysis"
      },
      {
        name: "Operating System Internals",
        description: "Process management, Memory organization, System calls, Kernel basics"
      },
      {
        name: "Scripting for Automation",
        description: "Python network programming, Advanced Bash scripting"
      }
    ],
    explanation: [
      "Understanding network services and their vulnerabilities is key to network penetration testing.",
      "Deep knowledge of memory organization is vital for exploit development.",
      "Python becomes indispensable for developing custom tools and automating reconnaissance."
    ],
    labs: [
      "Network service enumeration with Nmap",
      "Firewall configuration with iptables/ufw",
      "Packet analysis with Wireshark",
      "Python network programming",
      "Linux privilege escalation practice"
    ],
    tools: [
      "Nmap",
      "Wireshark",
      "Python",
      "Bash",
      "Kali Linux"
    ],
    platforms: [
      "TryHackMe (Network Services path)",
      "Hack The Box (Starting Point machines)",
      "OverTheWire (Natas, Leviathan)"
    ],
    projects: [
      "Automated network reconnaissance script",
      "Log analyzer in Bash",
      "Simple firewall configuration script"
    ],
    mistakes: [
      "Over-reliance on GUI tools",
      "Ignoring documentation",
      "Jumping between topics without foundation",
      "Not practicing regularly"
    ]
  },
  {
    id: 3,
    title: "Web Security & Bug Bounty Skills",
    description: "Mastering web application vulnerabilities and bug bounty methodology",
    duration: "3-4 months",
    topics: [
      {
        name: "Web Technologies",
        description: "HTTP/HTTPS, Web servers, Databases, Client/Server-side technologies"
      },
      {
        name: "OWASP Top 10",
        description: "Injection, XSS, Broken Auth, XXE, Access Control, and more"
      },
      {
        name: "Bug Bounty Methodology",
        description: "Reconnaissance, Vulnerability scanning, Manual testing, Reporting"
      },
      {
        name: "API Security",
        description: "REST API vulnerabilities, GraphQL security"
      }
    ],
    explanation: [
      "Understanding web technologies is fundamental to identifying attack vectors.",
      "OWASP Top 10 represents the most critical web application security risks.",
      "Bug bounty methodology involves systematic vulnerability discovery and professional reporting.",
      "APIs are increasingly targeted; understanding their vulnerabilities is crucial."
    ],
    labs: [
      "PortSwigger Web Security Academy labs",
      "SQL Injection and XSS practice",
      "Burp Suite Basics",
      "DVWA setup and exploitation"
    ],
    tools: [
      "Burp Suite Community Edition",
      "Nikto",
      "OWASP ZAP",
      "Browser Developer Tools",
      "curl/wget"
    ],
    platforms: [
      "PortSwigger Web Security Academy",
      "TryHackMe (OWASP Top 10)",
      "Hack The Box Academy",
      "HackerOne/Bugcrowd (after gaining skills)"
    ],
    projects: [
      "Deploy vulnerable web app (DVWA/bWAPP)",
      "Python web scraper",
      "XSS payload generator"
    ],
    mistakes: [
      "Relying solely on automated scanners",
      "Not understanding underlying web technologies",
      "Jumping into bug bounties too early",
      "Ignoring the reporting aspect"
    ]
  },
  {
    id: 4,
    title: "Offensive Security & Exploitation",
    description: "Developing practical offensive security skills and exploitation techniques",
    duration: "3-5 months",
    topics: [
      {
        name: "Vulnerability Research",
        description: "CVEs, NVD, Exploit databases, Assessment methodologies"
      },
      {
        name: "Exploitation Techniques",
        description: "Buffer Overflows, Format Strings, Race Conditions, Integer Overflows"
      },
      {
        name: "Metasploit Framework",
        description: "Modules, Meterpreter, Msfvenom"
      },
      {
        name: "Post-Exploitation",
        description: "Privilege escalation, Lateral movement, Persistence, Data exfiltration"
      },
      {
        name: "Social Engineering",
        description: "Phishing, Pretexting, Baiting, Tailgating (theoretical)"
      }
    ],
    explanation: [
      "Learning to research vulnerabilities using CVEs and Exploit-DB is crucial.",
      "Buffer overflows and format string bugs exploit memory management flaws.",
      "Metasploit is a powerful framework for practical penetration testing.",
      "Post-exploitation is about maintaining access and escalating privileges.",
      "Social engineering is often the precursor to technical attacks."
    ],
    labs: [
      "Buffer overflow exploitation",
      "Metasploit on Metasploitable 2/3",
      "Privilege escalation labs",
      "CTF binary exploitation challenges"
    ],
    tools: [
      "Metasploit Framework",
      "GDB",
      "WinDbg",
      "Ghidra",
      "IDA Free",
      "Nessus/OpenVAS"
    ],
    platforms: [
      "TryHackMe (Offensive Pentesting path)",
      "Hack The Box (Easy/Medium machines)",
      "VulnHub",
      "CTFTime.org"
    ],
    projects: [
      "Custom Metasploit module",
      "Basic exploit development in Python",
      "Automated reconnaissance with vulnerability scan"
    ],
    mistakes: [
      "Jumping directly to Metasploit without understanding concepts",
      "Ignoring manual exploitation",
      "Lack of debugging skills",
      "Not practicing enough"
    ]
  },
  {
    id: 5,
    title: "Advanced Hacking & Reverse Engineering",
    description: "Understanding software at low level and analyzing malicious code",
    duration: "4-6 months",
    topics: [
      {
        name: "Reverse Engineering",
        description: "Assembly language, Disassemblers, Debuggers, Malware analysis"
      },
      {
        name: "Exploit Development (Advanced)",
        description: "ROP, Shellcoding, Heap exploitation, Kernel exploitation, Fuzzing"
      },
      {
        name: "Binary Analysis",
        description: "ELF/PE formats, Symbol tables, Function call conventions"
      },
      {
        name: "Memory Forensics",
        description: "Volatility Framework, Memory acquisition, Malware artifacts"
      },
      {
        name: "Advanced Cryptography",
        description: "Cryptanalysis, Cryptographic primitives, Side-channel attacks"
      }
    ],
    explanation: [
      "Reverse engineering is deconstructing software to understand its functionality.",
      "ROP and shellcoding are sophisticated exploitation techniques.",
      "Binary analysis helps understand program structure and interactions.",
      "Memory forensics uncovers evidence of malicious activity.",
      "Cryptanalysis helps identify weaknesses in implementations."
    ],
    labs: [
      "Reverse engineering crackmes",
      "Binary exploitation wargames",
      "Malware analysis in sandbox",
      "Fuzzing practice",
      "Memory forensics analysis"
    ],
    tools: [
      "Ghidra",
      "IDA Pro",
      "GDB",
      "x64dbg",
      "AFL++",
      "Volatility Framework",
      "HxD/bless"
    ],
    platforms: [
      "Pwnable.kr",
      "Exploit-Exercises.com",
      "CrackTheBox/Reversing.kr",
      "CTFTime.org"
    ],
    projects: [
      "Simple keylogger analysis",
      "Custom shellcode development",
      "Vulnerability discovery with fuzzing",
      "Memory dump analysis report"
    ],
    mistakes: [
      "Getting overwhelmed by assembly language",
      "Ignoring theoretical aspects",
      "Lack of patience with complex topics",
      "Not using proper isolated lab environments"
    ]
  },
  {
    id: 6,
    title: "CTF / Competition Level Skills",
    description: "Integrating all skills for competitive CTF excellence",
    duration: "6-12 months (ongoing)",
    topics: [
      {
        name: "CTF Categories",
        description: "Cryptography, Web, Pwn, Reversing, Forensics, Steganography"
      },
      {
        name: "Advanced Problem Solving",
        description: "Creative thinking, Out-of-the-box solutions, Combining vulnerabilities"
      },
      {
        name: "Teamwork & Communication",
        description: "Effective collaboration, Task delegation, Knowledge sharing"
      },
      {
        name: "Time Management",
        description: "Prioritizing challenges, Efficient analysis, Speed in exploitation"
      },
      {
        name: "Scripting for Speed",
        description: "Rapid tool development, Custom scripts on the fly"
      },
      {
        name: "Obscure Vulnerabilities",
        description: "Less common and cutting-edge vulnerability types"
      }
    ],
    explanation: [
      "CTF categories test different skill sets; mastering each is key.",
      "Creative problem-solving often distinguishes winners from participants.",
      "Teamwork multiplies effectiveness in team-based competitions.",
      "Time management is crucial in time-bound competitions.",
      "Speed in scripting provides significant competitive advantage.",
      "Staying updated on new vulnerabilities is essential for high-level CTFs."
    ],
    labs: [
      "Regular CTF participation",
      "CTF write-ups analysis",
      "Team practice sessions",
      "Advanced challenge solving"
    ],
    tools: [
      "VS Code/Sublime Text",
      "Ghidra/IDA Pro",
      "GDB/x64dbg",
      "Metasploit",
      "Pwntools",
      "Volatility Framework",
      "CyberChef"
    ],
    platforms: [
      "CTFTime.org",
      "PicoCTF/CTFlearn",
      "Hack The Box Pro Labs",
      "Root-Me",
      "OverTheWire"
    ],
    projects: [
      "Automated CTF reconnaissance script",
      "Generic exploit template",
      "CTF challenge generator",
      "Public write-up repository"
    ],
    mistakes: [
      "Lack of specialization",
      "Not reading problem descriptions carefully",
      "Ignoring small details",
      "Fear of failure",
      "Poor time management",
      "Ineffective teamwork"
    ]
  }
];

export const timeline: TimelineEntry[] = [
  {
    months: "1-2",
    stage: "Beginner Foundation",
    goals: ["Master OS, networking, and Linux fundamentals"],
    labs: ["OverTheWire Bandit", "TryHackMe Pre-Security/Linux Fundamentals"],
    projects: ["Simple Bash scripts", "Basic network scanner"],
    ctf: "None (focus on fundamentals)"
  },
  {
    months: "3-4",
    stage: "Networking & System Fundamentals",
    goals: ["Deepen understanding of network services, OS internals, and Python scripting"],
    labs: ["TryHackMe Network Services", "HTB Starting Point (Meow, Fawn)"],
    projects: ["Automated network recon script", "Log analyzer", "Firewall script"],
    ctf: "None (focus on building skills)"
  },
  {
    months: "5-7",
    stage: "Web Security & Bug Bounty Skills",
    goals: ["Learn OWASP Top 10, web technologies, and bug bounty methodology"],
    labs: ["PortSwigger Web Security Academy", "TryHackMe OWASP Top 10", "DVWA"],
    projects: ["Vulnerable web app setup", "XSS payload generator"],
    ctf: "Beginner web CTF challenges"
  },
  {
    months: "8-10",
    stage: "Offensive Security & Exploitation",
    goals: ["Understand exploitation techniques, Metasploit, and post-exploitation"],
    labs: ["TryHackMe Buffer Overflow Prep", "HTB Easy/Medium machines"],
    projects: ["Custom Metasploit module", "Basic buffer overflow exploit"],
    ctf: "Binary exploitation/pwn CTF challenges"
  },
  {
    months: "11-14",
    stage: "Advanced Hacking & Reverse Engineering",
    goals: ["Master RE, advanced exploit dev, binary analysis, and memory forensics"],
    labs: ["Pwnable.kr", "Exploit-Exercises (Protostar)", "Crackmes"],
    projects: ["Keylogger RE", "Custom shellcode", "Fuzzer-based vulnerability discovery"],
    ctf: "Intermediate RE/pwn CTF challenges"
  },
  {
    months: "15-24",
    stage: "CTF / Competition Level Skills",
    goals: ["Refine skills across all CTF categories, focus on speed and teamwork"],
    labs: ["Regular CTF participation", "Advanced HTB machines", "Root-Me"],
    projects: ["Automated CTF recon script", "Generic exploit template"],
    ctf: "Active participation in CTFs, aiming for competitive performance"
  }
];

export const tools = [
  {
    name: "Kali Linux",
    category: "Operating System",
    description: "Pre-installed penetration testing tools and security applications"
  },
  {
    name: "Nmap",
    category: "Network Scanner",
    description: "Network discovery and security auditing tool"
  },
  {
    name: "Wireshark",
    category: "Packet Analyzer",
    description: "Network protocol analyzer for traffic inspection"
  },
  {
    name: "Burp Suite",
    category: "Web Security",
    description: "Web application security testing platform"
  },
  {
    name: "Metasploit",
    category: "Exploitation Framework",
    description: "Penetration testing framework with extensive exploit database"
  },
  {
    name: "Ghidra",
    category: "Reverse Engineering",
    description: "Free software reverse engineering framework"
  },
  {
    name: "GDB",
    category: "Debugger",
    description: "GNU Debugger for analyzing program execution"
  },
  {
    name: "Volatility Framework",
    category: "Memory Forensics",
    description: "Memory forensics framework for analyzing RAM dumps"
  },
  {
    name: "AFL++",
    category: "Fuzzer",
    description: "American Fuzzy Lop Plus Plus for vulnerability discovery"
  },
  {
    name: "Python",
    category: "Programming",
    description: "Essential scripting language for security tools and exploits"
  }
];

export const resources = [
  {
    name: "TryHackMe",
    url: "https://tryhackme.com",
    description: "Interactive cybersecurity training platform with guided rooms"
  },
  {
    name: "Hack The Box",
    url: "https://www.hackthebox.com",
    description: "Platform with vulnerable machines for hands-on hacking practice"
  },
  {
    name: "OverTheWire",
    url: "https://overthewire.org",
    description: "Wargames and security challenges for skill development"
  },
  {
    name: "PortSwigger Web Security Academy",
    url: "https://portswigger.net/web-security",
    description: "Free online web security training with interactive labs"
  },
  {
    name: "CTFTime",
    url: "https://ctftime.org",
    description: "CTF competition calendar and resources"
  },
  {
    name: "HackerOne",
    url: "https://www.hackerone.com",
    description: "Bug bounty platform connecting researchers with organizations"
  },
  {
    name: "Bugcrowd",
    url: "https://www.bugcrowd.com",
    description: "Crowdsourced security and bug bounty platform"
  }
];
