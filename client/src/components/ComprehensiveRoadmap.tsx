import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { BookOpen, Code, Lock, Zap, Target, Award, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export default function ComprehensiveRoadmap() {
  const [expandedYear, setExpandedYear] = useState<number | null>(1);

  const years = [
    {
      year: 1,
      title: 'Foundations',
      duration: '12 months',
      color: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
      borderColor: 'border-blue-400 dark:border-blue-600',
      icon: BookOpen,
      objectives: [
        'Establish strong foundation in computer science fundamentals',
        'Master Python programming',
        'Understand basic networking and operating systems',
        'Begin cybersecurity basics'
      ],
      semesters: [
        {
          name: 'Semester 1 (Months 1-6)',
          topics: [
            'Python Mastery (OOP, data structures, libraries)',
            'Data Structures & Algorithms (arrays, trees, graphs)',
            'Operating Systems Basics (processes, memory, file systems)',
            'Networking Fundamentals (OSI model, TCP/IP, protocols)'
          ]
        },
        {
          name: 'Semester 2 (Months 7-12)',
          topics: [
            'Linux Fundamentals & Command Line',
            'Cybersecurity Fundamentals (CIA triad, attacks, defenses)',
            'Introduction to Web Security (OWASP Top 10)',
            'Introduction to Cryptography (symmetric encryption basics)'
          ]
        }
      ],
      hoursPerWeek: '20-25',
      projects: [
        'Port scanner in Python',
        'Password strength checker',
        'File encryption/decryption tool',
        'Network packet analyzer',
        'System monitor'
      ]
    },
    {
      year: 2,
      title: 'Intermediate Skills',
      duration: '12 months',
      color: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30',
      borderColor: 'border-purple-400 dark:border-purple-600',
      icon: Code,
      objectives: [
        'Deepen cryptography knowledge',
        'Develop practical hacking skills',
        'Master C and C++ programming',
        'Understand cryptographic algorithms'
      ],
      semesters: [
        {
          name: 'Semester 1 (Months 13-18)',
          topics: [
            'Advanced Python & Systems Programming (C fundamentals)',
            'Ethical Hacking Fundamentals (penetration testing phases)',
            'Cryptography: Symmetric Encryption (AES, DES, modes)',
            'Linux System Administration & Hardening'
          ]
        },
        {
          name: 'Semester 2 (Months 19-24)',
          topics: [
            'C++ and Rust Programming',
            'Cryptography: Public-Key Cryptography & RSA',
            'Advanced Web Security (SQL injection, XSS, CSRF)',
            'Reverse Engineering Basics (assembly, debugging, disassembly)'
          ]
        }
      ],
      hoursPerWeek: '25-30',
      projects: [
        'Network penetration testing suite',
        'Cryptography library implementation',
        'Reverse engineering tool',
        'Web application firewall',
        'Malware analysis platform'
      ]
    },
    {
      year: 3,
      title: 'Advanced Mastery',
      duration: '12 months',
      color: 'from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30',
      borderColor: 'border-red-400 dark:border-red-600',
      icon: Lock,
      objectives: [
        'Specialize in chosen security domain',
        'Develop professional-level skills',
        'Prepare for industry roles',
        'Contribute to open-source projects'
      ],
      semesters: [
        {
          name: 'Semester 1 (Months 25-30)',
          topics: [
            'Advanced Cryptography: Hash Functions & Authentication',
            'Advanced Ethical Hacking: Exploitation & Post-Exploitation',
            'Malware Analysis & Reverse Engineering',
            'Network Security & Advanced Attacks'
          ]
        },
        {
          name: 'Semester 2 (Months 31-36)',
          topics: [
            'Cryptography: Advanced Topics & Research',
            'Professional Penetration Testing (OSCP preparation)',
            'Incident Response & Forensics',
            'Specialization Path (choose: Cryptography, Offensive, Defensive, or Development)'
          ]
        }
      ],
      hoursPerWeek: '30-35',
      projects: [
        'Security Operations Center (SOC) Tool',
        'Incident Response Platform',
        'Threat Intelligence System',
        'Advanced Exploitation Suite',
        'Open Source Contribution or Research Project'
      ]
    }
  ];

  const coreTopics = [
    {
      title: 'Data Structures',
      description: 'Arrays, linked lists, trees, graphs, hash tables, heaps',
      importance: 'Critical'
    },
    {
      title: 'Algorithms',
      description: 'Sorting, searching, graph algorithms, dynamic programming',
      importance: 'Critical'
    },
    {
      title: 'Operating Systems',
      description: 'Process management, memory management, file systems',
      importance: 'High'
    },
    {
      title: 'Networking',
      description: 'OSI model, TCP/IP, protocols, packet analysis',
      importance: 'Critical'
    }
  ];

  const languages = [
    {
      name: 'Python',
      year: 'Year 1',
      focus: 'Security tool development, scripting',
      libraries: ['socket', 'requests', 'cryptography', 'scapy']
    },
    {
      name: 'C',
      year: 'Year 2',
      focus: 'Systems programming, exploit development',
      libraries: ['stdlib', 'unistd', 'sys/socket']
    },
    {
      name: 'C++',
      year: 'Year 2-3',
      focus: 'High-performance security tools',
      libraries: ['STL', 'Boost', 'OpenSSL']
    },
    {
      name: 'Rust',
      year: 'Year 2-3',
      focus: 'Safe systems programming',
      libraries: ['tokio', 'serde', 'cryptography crates']
    },
    {
      name: 'Bash',
      year: 'Throughout',
      focus: 'System administration, automation',
      libraries: ['grep', 'sed', 'awk']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            3-Year Comprehensive Learning Roadmap
          </h2>
        </div>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
          A structured 36-month journey from foundations to professional expertise in cybersecurity, ethical hacking, cryptography, and advanced programming. Designed for BSc Software Engineering students with programming basics.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-slate-900 dark:text-white">Duration</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">36 Months</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">3 years of structured learning</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-slate-900 dark:text-white">Weekly Hours</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">20-35</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Progressive increase each year</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-slate-900 dark:text-white">Languages</h3>
          </div>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">5+</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Python, C, C++, Rust, Bash</p>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-slate-900 dark:text-white">Projects</h3>
          </div>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">15+</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Real-world applications</p>
        </Card>
      </div>

      {/* Year-by-Year Breakdown */}
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {years.map((yearData) => {
          const YearIcon = yearData.icon;
          return (
            <motion.div key={yearData.year} variants={itemVariants}>
              <Card
                className={`bg-gradient-to-br ${yearData.color} border-2 ${yearData.borderColor} overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
                onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
              >
                {/* Year Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <YearIcon className="w-6 h-6 text-slate-900 dark:text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Year {yearData.year}: {yearData.title}
                          </h3>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {yearData.duration} • {yearData.hoursPerWeek} hours/week
                          </p>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {expandedYear === yearData.year ? 'Collapse' : 'Expand'}
                    </Badge>
                  </div>

                  {/* Objectives */}
                  <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Key Objectives:</h4>
                    {yearData.objectives.map((obj, idx) => (
                      <div key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedYear === yearData.year && (
                  <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-white/50 dark:bg-slate-800/50 space-y-6">
                    {/* Semesters */}
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4">Learning Path:</h4>
                      <div className="space-y-4">
                        {yearData.semesters.map((sem, idx) => (
                          <div key={idx} className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                            <h5 className="font-semibold text-slate-900 dark:text-white mb-3">{sem.name}</h5>
                            <ul className="space-y-2">
                              {sem.topics.map((topic, topicIdx) => (
                                <li key={topicIdx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                                  <span className="text-blue-600 dark:text-blue-400">→</span>
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-3">Key Projects:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {yearData.projects.map((proj, idx) => (
                          <div key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
                            <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span>{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Core Computer Science Knowledge */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Core Computer Science Knowledge
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {coreTopics.map((topic, idx) => (
            <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-slate-900 dark:text-white">{topic.title}</h4>
                <Badge variant={topic.importance === 'Critical' ? 'default' : 'outline'}>
                  {topic.importance}
                </Badge>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">{topic.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Programming Languages */}
      <Card className="p-6 bg-gradient-to-r from-code-50 to-dev-50 dark:from-code-900/30 dark:to-dev-900/30 border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Programming Languages to Master
        </h3>
        <div className="space-y-3">
          {languages.map((lang, idx) => (
            <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{lang.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{lang.focus}</p>
                </div>
                <Badge variant="outline">{lang.year}</Badge>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Key libraries: {lang.libraries.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Career Paths */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200 dark:border-indigo-800">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Career Paths After Completion
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Security Engineer</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Design and implement secure systems, conduct code reviews, develop security architectures.
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Salary: $100k-$180k+</p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Penetration Tester</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Conduct security assessments, identify vulnerabilities, write detailed reports.
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Salary: $90k-$160k+</p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Cryptography Researcher</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Research cryptographic algorithms, publish papers, contribute to standards.
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Salary: $100k-$200k+</p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Malware Analyst</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
              Analyze malicious software, conduct incident response, threat intelligence.
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Salary: $85k-$150k+</p>
          </div>
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Getting Started
        </h3>
        <ol className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">1.</span>
            <span>Download the complete roadmap document (available in Resources section)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">2.</span>
            <span>Set up your learning environment (Linux VM, IDE, tools)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">3.</span>
            <span>Start with Python fundamentals and data structures (Month 1)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">4.</span>
            <span>Follow the weekly schedule and complete projects</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">5.</span>
            <span>Track your progress and adjust pace as needed</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">6.</span>
            <span>Pursue certifications (Security+, OSCP, CISSP)</span>
          </li>
        </ol>
      </Card>
    </div>
  );
}
