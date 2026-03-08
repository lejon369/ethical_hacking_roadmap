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


// Programming Languages and Frameworks for Ethical Hacking
export interface ProgrammingLanguage {
  id: string;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  stage: number;
  description: string;
  useCases: string[];
  resources: {
    title: string;
    url: string;
  }[];
  projects: string[];
  tools: string[];
}

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    difficulty: 'Beginner',
    stage: 1,
    description: 'The most essential language for ethical hackers. Python is used for scripting, automation, exploit development, and security tool creation.',
    useCases: [
      'Network scanning and reconnaissance',
      'Exploit development and delivery',
      'Web scraping and automation',
      'Malware analysis and reverse engineering',
      'Data analysis and visualization',
      'Building custom security tools'
    ],
    resources: [
      {
        title: 'Python for Everybody',
        url: 'https://www.py4e.com/'
      },
      {
        title: 'Automate the Boring Stuff with Python',
        url: 'https://automatetheboringstuff.com/'
      },
      {
        title: 'Black Hat Python',
        url: 'https://www.oreilly.com/library/view/black-hat-python/9781491900970/'
      },
      {
        title: 'HackTricks Python Security',
        url: 'https://book.hacktricks.xyz/generic-methodologies-and-resources/python'
      }
    ],
    projects: [
      'Port scanner with socket programming',
      'Network packet sniffer using Scapy',
      'Simple web scraper for vulnerability databases',
      'Brute force SSH login tool',
      'Reverse shell generator',
      'Keylogger implementation',
      'Exploit framework extension'
    ],
    tools: [
      'Scapy - Network packet manipulation',
      'Requests - HTTP library for web requests',
      'Beautiful Soup - Web scraping',
      'Paramiko - SSH protocol implementation',
      'Pycryptodome - Cryptographic functions',
      'PEFile - PE file analysis',
      'Metasploit - Python modules'
    ]
  },
  {
    id: 'bash',
    name: 'Bash/Shell Scripting',
    difficulty: 'Beginner',
    stage: 1,
    description: 'Essential for Linux automation and system administration. Bash scripts are fundamental for penetration testing workflows.',
    useCases: [
      'System administration automation',
      'Batch processing and file operations',
      'Network reconnaissance scripting',
      'Log analysis and parsing',
      'Automated vulnerability scanning',
      'Post-exploitation automation'
    ],
    resources: [
      {
        title: 'Advanced Bash-Scripting Guide',
        url: 'https://www.tldp.org/LDP/abs/html/'
      },
      {
        title: 'Bash Guide for Beginners',
        url: 'https://www.tldp.org/guides.html'
      },
      {
        title: 'Linux Command Line Basics',
        url: 'https://www.udemy.com/course/linux-command-line-basics/'
      }
    ],
    projects: [
      'Network scanning automation script',
      'Log parser for security analysis',
      'Automated backup and recovery script',
      'System hardening automation',
      'Vulnerability scanner wrapper',
      'Reconnaissance data aggregator'
    ],
    tools: [
      'Bash - Default shell scripting',
      'Zsh - Advanced shell with plugins',
      'Fish - User-friendly shell',
      'GNU tools - sed, awk, grep'
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    difficulty: 'Intermediate',
    stage: 3,
    description: 'Critical for web security testing, XSS exploitation, and browser-based attacks. Understanding JavaScript is essential for web penetration testing.',
    useCases: [
      'XSS (Cross-Site Scripting) exploitation',
      'DOM manipulation and manipulation',
      'Browser exploitation',
      'Web application testing',
      'Burp Suite extensions development',
      'Malicious payload creation'
    ],
    resources: [
      {
        title: 'JavaScript.info',
        url: 'https://javascript.info/'
      },
      {
        title: 'OWASP JavaScript Security',
        url: 'https://owasp.org/www-community/attacks/xss/'
      },
      {
        title: 'PortSwigger Web Security Academy',
        url: 'https://portswigger.net/web-security/cross-site-scripting'
      }
    ],
    projects: [
      'XSS payload generator',
      'DOM-based vulnerability scanner',
      'Burp Suite extension for JavaScript analysis',
      'Malicious JavaScript payload delivery',
      'Session hijacking proof-of-concept',
      'CSRF token extractor'
    ],
    tools: [
      'Node.js - JavaScript runtime',
      'npm - Package manager',
      'Burp Suite - Web security testing',
      'Browser DevTools - Debugging'
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    difficulty: 'Intermediate',
    stage: 4,
    description: 'Essential for Windows exploitation, malware development, and post-exploitation tools. C# is widely used in red team operations.',
    useCases: [
      'Windows exploitation and privilege escalation',
      'Malware development and obfuscation',
      'Post-exploitation tools',
      'Active Directory attacks',
      'Reverse shell development',
      '.NET framework exploitation'
    ],
    resources: [
      {
        title: 'Microsoft C# Documentation',
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
      },
      {
        title: 'Red Team Development with C#',
        url: 'https://www.oreilly.com/library/view/red-team-development/9781492052289/'
      },
      {
        title: 'HackTricks Windows Exploitation',
        url: 'https://book.hacktricks.xyz/windows/windows-local-privilege-escalation'
      }
    ],
    projects: [
      'Windows privilege escalation tool',
      'Active Directory enumeration tool',
      'Reverse shell with C2 communication',
      'Credential harvesting tool',
      'Process injection proof-of-concept',
      'Windows service exploitation tool'
    ],
    tools: [
      'Visual Studio - IDE',
      'SharpHound - AD enumeration',
      'Rubeus - Kerberos exploitation',
      'Mimikatz - Credential dumping',
      '.NET Framework - Core library'
    ]
  },
  {
    id: 'cpp',
    name: 'C/C++',
    difficulty: 'Advanced',
    stage: 5,
    description: 'Low-level language for exploit development, reverse engineering, and performance-critical security tools.',
    useCases: [
      'Exploit development and shellcode',
      'Reverse engineering and binary analysis',
      'Kernel exploitation',
      'Performance-critical tools',
      'Malware analysis and development',
      'Hardware-level security research'
    ],
    resources: [
      {
        title: 'The C Programming Language',
        url: 'https://www.amazon.com/Programming-Language-Brian-W-Kernighan/dp/0131103628'
      },
      {
        title: 'Exploit Writing Tutorials',
        url: 'https://www.corelan.be/index.php/2009/07/19/exploit-writing-tutorial-part-1-stack-based-overflows/'
      },
      {
        title: 'Reverse Engineering with Ghidra',
        url: 'https://ghidra-sre.org/'
      }
    ],
    projects: [
      'Buffer overflow exploit',
      'Shellcode development',
      'Kernel driver exploitation',
      'Binary packing and obfuscation',
      'Custom exploit framework',
      'Memory corruption vulnerability'
    ],
    tools: [
      'GCC/Clang - Compilers',
      'GDB - Debugger',
      'Ghidra - Reverse engineering',
      'IDA Pro - Disassembler',
      'Radare2 - Reverse engineering framework'
    ]
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    difficulty: 'Intermediate',
    stage: 4,
    description: 'Modern language for building fast, concurrent security tools. Popular for malware development and red team tooling.',
    useCases: [
      'Fast security tool development',
      'Concurrent network scanning',
      'Malware development',
      'Post-exploitation tools',
      'Command and control (C2) development',
      'Penetration testing framework extensions'
    ],
    resources: [
      {
        title: 'Go Official Documentation',
        url: 'https://golang.org/doc/'
      },
      {
        title: 'Go Security Best Practices',
        url: 'https://golang.org/doc/security'
      },
      {
        title: 'Metasploit Go Modules',
        url: 'https://github.com/rapid7/metasploit-framework'
      }
    ],
    projects: [
      'Fast port scanner',
      'Concurrent vulnerability scanner',
      'Reverse shell with Go',
      'Malware dropper in Go',
      'C2 communication tool',
      'Network reconnaissance tool'
    ],
    tools: [
      'Go compiler',
      'Go modules - Dependency management',
      'Cobra - CLI framework',
      'Gin - Web framework'
    ]
  },
  {
    id: 'java',
    name: 'Java',
    difficulty: 'Intermediate',
    stage: 3,
    description: 'Important for web application security testing and understanding enterprise applications. Used in Burp Suite extension development.',
    useCases: [
      'Java web application testing',
      'Burp Suite extension development',
      'Deserialization exploitation',
      'Enterprise application security',
      'Android security testing',
      'Spring framework vulnerability exploitation'
    ],
    resources: [
      {
        title: 'Oracle Java Documentation',
        url: 'https://docs.oracle.com/javase/'
      },
      {
        title: 'PortSwigger Java Security',
        url: 'https://portswigger.net/web-security'
      },
      {
        title: 'OWASP Java Security',
        url: 'https://owasp.org/www-community/attacks/Deserialization_of_untrusted_data'
      }
    ],
    projects: [
      'Burp Suite extension for Java analysis',
      'Deserialization exploit development',
      'Spring framework vulnerability scanner',
      'Java web application penetration testing tool',
      'Android malware analysis tool'
    ],
    tools: [
      'JDK - Java Development Kit',
      'Maven - Build tool',
      'Burp Suite - Web security testing',
      'Frida - Dynamic instrumentation'
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    difficulty: 'Advanced',
    stage: 5,
    description: 'Modern systems programming language for building safe, fast security tools and malware with memory safety guarantees.',
    useCases: [
      'Safe systems programming for security tools',
      'High-performance exploit development',
      'Memory-safe malware development',
      'Kernel-level security research',
      'WebAssembly security research',
      'Cryptographic implementations'
    ],
    resources: [
      {
        title: 'The Rust Programming Language',
        url: 'https://doc.rust-lang.org/book/'
      },
      {
        title: 'Rust Security Guidelines',
        url: 'https://anssi-fr.github.io/rust-guide/'
      },
      {
        title: 'Rust for Security Professionals',
        url: 'https://www.rust-lang.org/what/wasm/'
      }
    ],
    projects: [
      'Memory-safe exploit framework',
      'High-performance port scanner',
      'Cryptographic vulnerability scanner',
      'WebAssembly security research tool',
      'Safe malware analysis sandbox'
    ],
    tools: [
      'Cargo - Package manager',
      'Rustup - Version manager',
      'Clippy - Linter',
      'MIRI - Undefined behavior detector'
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    difficulty: 'Beginner',
    stage: 3,
    description: 'Essential for web security testing. Understanding SQL is critical for identifying and exploiting SQL injection vulnerabilities.',
    useCases: [
      'SQL injection exploitation',
      'Database enumeration and extraction',
      'Database security testing',
      'Data exfiltration',
      'Authentication bypass',
      'Privilege escalation in databases'
    ],
    resources: [
      {
        title: 'SQL Tutorial',
        url: 'https://www.w3schools.com/sql/'
      },
      {
        title: 'PortSwigger SQL Injection',
        url: 'https://portswigger.net/web-security/sql-injection'
      },
      {
        title: 'OWASP SQL Injection',
        url: 'https://owasp.org/www-community/attacks/SQL_Injection'
      }
    ],
    projects: [
      'SQL injection payload generator',
      'Database enumeration tool',
      'Automated SQL injection scanner',
      'Authentication bypass proof-of-concept',
      'Data extraction automation'
    ],
    tools: [
      'SQLMap - SQL injection automation',
      'MySQL Workbench - Database management',
      'PostgreSQL - Database system',
      'Burp Suite - Web security testing'
    ]
  },
  {
    id: 'assembly',
    name: 'Assembly',
    difficulty: 'Advanced',
    stage: 5,
    description: 'Low-level language for reverse engineering, exploit development, and understanding binary code execution.',
    useCases: [
      'Reverse engineering and binary analysis',
      'Shellcode development',
      'Exploit development and debugging',
      'Vulnerability analysis',
      'Malware analysis and understanding',
      'Performance optimization'
    ],
    resources: [
      {
        title: 'x86 Assembly Guide',
        url: 'https://www.cs.uaf.edu/2015/fall/cs301/lecture/09_28_assembly.html'
      },
      {
        title: 'Reverse Engineering with Ghidra',
        url: 'https://ghidra-sre.org/'
      },
      {
        title: 'Practical Reverse Engineering',
        url: 'https://www.oreilly.com/library/view/practical-reverse-engineering/9781118787311/'
      }
    ],
    projects: [
      'Shellcode development and optimization',
      'Binary vulnerability analysis',
      'Reverse engineering challenge solutions',
      'Exploit development with assembly',
      'Malware behavior analysis'
    ],
    tools: [
      'GDB - GNU Debugger',
      'Ghidra - Reverse engineering framework',
      'IDA Pro - Disassembler and debugger',
      'Radare2 - Reverse engineering framework',
      'NASM - Assembler'
    ]
  }
];

export const programmingPaths = [
  {
    name: 'Web Security Path',
    languages: ['Python', 'JavaScript', 'SQL'],
    stage: 3,
    description: 'Focus on web application security, XSS, SQL injection, and web-based exploitation',
    duration: '3 months'
  },
  {
    name: 'Exploit Development Path',
    languages: ['Python', 'C/C++', 'Assembly'],
    stage: 4,
    description: 'Master exploit development, shellcode, and advanced binary exploitation',
    duration: '4 months'
  },
  {
    name: 'Red Team Path',
    languages: ['Python', 'C#', 'Go'],
    stage: 4,
    description: 'Build red team tools, malware, and post-exploitation frameworks',
    duration: '4 months'
  },
  {
    name: 'Reverse Engineering Path',
    languages: ['Assembly', 'C/C++', 'Python'],
    stage: 5,
    description: 'Analyze binaries, understand malware, and reverse engineer applications',
    duration: '3 months'
  },
  {
    name: 'Full Stack Hacker Path',
    languages: ['Python', 'Bash', 'JavaScript', 'C#', 'Go'],
    stage: 5,
    description: 'Comprehensive programming skills for all types of security testing',
    duration: '12 months'
  }
];
