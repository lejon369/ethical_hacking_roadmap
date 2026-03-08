import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { BookOpen, Code, Lock, Zap, Target, Award, Calendar, Users, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';
import { useProgress } from '@/contexts/ProgressContext';

interface YearTask {
  id: string;
  name: string;
  category: 'topic' | 'project' | 'language' | 'milestone';
  semester: number;
}

interface YearData {
  year: number;
  title: string;
  duration: string;
  color: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  objectives: string[];
  tasks: YearTask[];
  hoursPerWeek: string;
}

export default function ComprehensiveRoadmapDynamic() {
  const { completedRoadmapTasks, toggleRoadmapTask, getYearProgress, getRoadmapProgress } = useProgress();
  const [expandedYear, setExpandedYear] = useState<number | null>(1);

  const years: YearData[] = [
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
      hoursPerWeek: '20-25',
      tasks: [
        // Semester 1
        { id: 'year1-s1-python', name: 'Python Fundamentals & OOP', category: 'topic', semester: 1 },
        { id: 'year1-s1-dsa', name: 'Data Structures & Algorithms', category: 'topic', semester: 1 },
        { id: 'year1-s1-os', name: 'Operating Systems Basics', category: 'topic', semester: 1 },
        { id: 'year1-s1-net', name: 'Networking Fundamentals', category: 'topic', semester: 1 },
        { id: 'year1-s1-port-scanner', name: 'Port Scanner Project', category: 'project', semester: 1 },
        { id: 'year1-s1-crypto-intro', name: 'Cryptography Basics', category: 'topic', semester: 1 },
        { id: 'year1-s1-python-lang', name: 'Master Python', category: 'language', semester: 1 },
        // Semester 2
        { id: 'year1-s2-linux', name: 'Linux Fundamentals & CLI', category: 'topic', semester: 2 },
        { id: 'year1-s2-cybersec', name: 'Cybersecurity Fundamentals', category: 'topic', semester: 2 },
        { id: 'year1-s2-web-sec', name: 'Introduction to Web Security', category: 'topic', semester: 2 },
        { id: 'year1-s2-bandit', name: 'OverTheWire Bandit (20 levels)', category: 'project', semester: 2 },
        { id: 'year1-s2-encryption', name: 'File Encryption Tool', category: 'project', semester: 2 },
        { id: 'year1-s2-bash', name: 'Bash Scripting Basics', category: 'language', semester: 2 },
        { id: 'year1-complete', name: 'Year 1 Complete', category: 'milestone', semester: 2 },
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
      hoursPerWeek: '25-30',
      tasks: [
        // Semester 1
        { id: 'year2-s1-c', name: 'C Programming Fundamentals', category: 'language', semester: 1 },
        { id: 'year2-s1-adv-python', name: 'Advanced Python & Systems', category: 'topic', semester: 1 },
        { id: 'year2-s1-eth-hack', name: 'Ethical Hacking Fundamentals', category: 'topic', semester: 1 },
        { id: 'year2-s1-sym-crypto', name: 'Symmetric Encryption (AES, DES)', category: 'topic', semester: 1 },
        { id: 'year2-s1-linux-admin', name: 'Linux System Administration', category: 'topic', semester: 1 },
        { id: 'year2-s1-thm', name: 'TryHackMe (20+ rooms)', category: 'project', semester: 1 },
        { id: 'year2-s1-scanner', name: 'Network Penetration Testing Suite', category: 'project', semester: 1 },
        // Semester 2
        { id: 'year2-s2-cpp', name: 'C++ Programming', category: 'language', semester: 2 },
        { id: 'year2-s2-rust', name: 'Rust Programming Basics', category: 'language', semester: 2 },
        { id: 'year2-s2-rsa', name: 'Public-Key Cryptography & RSA', category: 'topic', semester: 2 },
        { id: 'year2-s2-web-adv', name: 'Advanced Web Security', category: 'topic', semester: 2 },
        { id: 'year2-s2-rev-eng', name: 'Reverse Engineering Basics', category: 'topic', semester: 2 },
        { id: 'year2-s2-htb', name: 'HackTheBox (15+ machines)', category: 'project', semester: 2 },
        { id: 'year2-s2-ctf', name: 'Participate in 5+ CTF Competitions', category: 'project', semester: 2 },
        { id: 'year2-complete', name: 'Year 2 Complete', category: 'milestone', semester: 2 },
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
      hoursPerWeek: '30-35',
      tasks: [
        // Semester 1
        { id: 'year3-s1-hash', name: 'Hash Functions & Authentication', category: 'topic', semester: 1 },
        { id: 'year3-s1-exploit', name: 'Advanced Exploitation Techniques', category: 'topic', semester: 1 },
        { id: 'year3-s1-malware', name: 'Malware Analysis & Reverse Engineering', category: 'topic', semester: 1 },
        { id: 'year3-s1-network', name: 'Advanced Network Security', category: 'topic', semester: 1 },
        { id: 'year3-s1-adv-ctf', name: 'Advanced CTF Challenges (30+)', category: 'project', semester: 1 },
        { id: 'year3-s1-exploit-dev', name: 'Develop 5+ Working Exploits', category: 'project', semester: 1 },
        // Semester 2
        { id: 'year3-s2-ecc', name: 'Elliptic Curve Cryptography', category: 'topic', semester: 2 },
        { id: 'year3-s2-post-quantum', name: 'Post-Quantum Cryptography', category: 'topic', semester: 2 },
        { id: 'year3-s2-oscp', name: 'OSCP Certification Preparation', category: 'project', semester: 2 },
        { id: 'year3-s2-pen-test', name: 'Professional Penetration Tests (5+)', category: 'project', semester: 2 },
        { id: 'year3-s2-incident', name: 'Incident Response & Forensics', category: 'topic', semester: 2 },
        { id: 'year3-s2-research', name: 'Original Security Research', category: 'project', semester: 2 },
        { id: 'year3-s2-open-source', name: 'Contribute to Open-Source Projects', category: 'project', semester: 2 },
        { id: 'year3-complete', name: 'Year 3 Complete - Professional Ready', category: 'milestone', semester: 2 },
      ]
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'topic':
        return 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800';
      case 'project':
        return 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800';
      case 'language':
        return 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800';
      case 'milestone':
        return 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800';
      default:
        return 'bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'topic':
        return <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'project':
        return <Code className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'language':
        return <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'milestone':
        return <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
      default:
        return <Circle className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
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
          Track your progress through a structured 36-month journey from foundations to professional expertise. Mark tasks as complete to monitor your learning journey.
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200 dark:border-indigo-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Overall Roadmap Progress</h3>
          <Badge variant="default">{getRoadmapProgress().percentage}%</Badge>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${getRoadmapProgress().percentage}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          {getRoadmapProgress().completed} of {getRoadmapProgress().total} tasks completed
        </p>
      </Card>

      {/* Year-by-Year Breakdown */}
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {years.map((yearData) => {
          const YearIcon = yearData.icon;
          const yearProgress = getYearProgress(yearData.year);
          const yearTasks = yearData.tasks;
          const completedCount = yearTasks.filter((task) => completedRoadmapTasks.includes(task.id)).length;

          return (
            <motion.div key={yearData.year} variants={itemVariants}>
              <Card
                className={`bg-gradient-to-br ${yearData.color} border-2 ${yearData.borderColor} overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
                onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
              >
                {/* Year Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
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
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {completedCount}/{yearTasks.length}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Tasks Complete</p>
                    </div>
                  </div>

                  {/* Year Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-700 dark:text-slate-300">Progress</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{yearProgress.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-300 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-emerald-600 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${yearProgress.percentage}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
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

                {/* Expanded Content - Tasks */}
                {expandedYear === yearData.year && (
                  <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-white/50 dark:bg-slate-800/50 space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">Learning Tasks:</h4>
                    <div className="space-y-2">
                      {yearTasks.map((task) => {
                        const isCompleted = completedRoadmapTasks.includes(task.id);
                        return (
                          <div
                            key={task.id}
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${getCategoryColor(task.category)}`}
                          >
                            <Checkbox
                              checked={isCompleted}
                              onCheckedChange={() => toggleRoadmapTask(task.id)}
                              className="cursor-pointer"
                            />
                            <div className="flex items-center gap-2 flex-1">
                              {getCategoryIcon(task.category)}
                              <span className={`text-sm ${isCompleted ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                                {task.name}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              S{task.semester}
                            </Badge>
                            {isCompleted && (
                              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Legend */}
      <Card className="p-6 bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Task Categories</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">Topics & Concepts</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">Projects & Labs</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">Programming Languages</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">Milestones</span>
          </div>
        </div>
      </Card>

      {/* Tips */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Tips for Success
        </h3>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">1.</span>
            <span>Complete tasks in order - each builds on previous knowledge</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">2.</span>
            <span>Spend extra time on topics that challenge you</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">3.</span>
            <span>Build real projects to solidify your learning</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">4.</span>
            <span>Participate in CTF competitions to test your skills</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-green-600 dark:text-green-400">5.</span>
            <span>Document your progress and share your journey</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
