import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, AlertTriangle, Lightbulb, Brain, CheckCircle2, Target, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function CareerBlueprint() {
  const [expandedSection, setExpandedSection] = useState<string | null>('reality');

  const sections = [
    {
      id: 'reality',
      title: 'Market Reality Check',
      icon: AlertTriangle,
      color: 'from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30',
      borderColor: 'border-red-400 dark:border-red-600',
      content: 'AI is disrupting junior developer roles but cybersecurity specialists remain irreplaceable. The global cybersecurity market grows 12-15% annually with only 15-20% of professionals having ML/AI expertise.'
    },
    {
      id: 'positioning',
      title: 'Career Positioning',
      icon: Target,
      color: 'from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30',
      borderColor: 'border-blue-400 dark:border-blue-600',
      content: 'An AI-Powered Cybersecurity Engineer combines deep security expertise, ML proficiency, and software engineering excellence. This rare combination commands premium compensation and job security.'
    },
    {
      id: 'hats',
      title: 'Six Thinking Hats',
      icon: Brain,
      color: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30',
      borderColor: 'border-purple-400 dark:border-purple-600',
      content: 'White: Required competencies and market facts. Red: Handle imposter syndrome and fear. Black: Avoid tutorial addiction and weak fundamentals. Yellow: Global talent arbitrage and rare skills. Green: Stand out through original research. Blue: Execution control and prioritization.'
    },
    {
      id: 'roadmap',
      title: '18-Month Roadmap',
      icon: TrendingUp,
      color: 'from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
      borderColor: 'border-green-400 dark:border-green-600',
      content: 'Phase 1 (0-3mo): Foundations. Phase 2 (3-6mo): Security Fundamentals. Phase 3 (6-9mo): Advanced Security + ML. Phase 4 (9-12mo): Specialization. Phase 5 (12-18mo): Professional Positioning.'
    },
    {
      id: 'skills',
      title: 'Core Skill Stack',
      icon: BookOpen,
      color: 'from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30',
      borderColor: 'border-indigo-400 dark:border-indigo-600',
      content: 'Must Learn: Python, Bash, Linux, Networking, Cryptography, Web Security. Should Learn: ML, Backend, Cloud/DevOps, System Design. Learn Later: Advanced cloud, specialized certs, emerging tech.'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Strategy',
      icon: Briefcase,
      color: 'from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30',
      borderColor: 'border-yellow-400 dark:border-yellow-600',
      content: '8 projects across 4 levels: Beginner (Port Scanner, Bash Toolkit), Intermediate (Web Scanner, ML Anomaly Detector), Advanced (Exploit Dev, Threat Intelligence), Capstone (End-to-End Security System).'
    },
    {
      id: 'income',
      title: 'Income Strategy',
      icon: TrendingUp,
      color: 'from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30',
      borderColor: 'border-teal-400 dark:border-teal-600',
      content: 'Start with open-source and content (months 0-6). Transition to bug bounties and internships (months 6-12). Move to remote jobs and consulting (months 12-18). Expected: $0-500/mo → $1000-5000/mo.'
    },
    {
      id: 'ai',
      title: 'AI Usage Strategy',
      icon: Lightbulb,
      color: 'from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30',
      borderColor: 'border-pink-400 dark:border-pink-600',
      content: 'Use AI for scaffolding (boilerplate code), not thinking. 70% of time: thinking and coding. 30% of time: using AI. Never outsource problem-solving. Preserve your thinking ability at all costs.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            AI-Powered Cybersecurity Engineer: Elite Career Blueprint
          </h2>
        </div>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
          A brutally realistic, execution-focused career blueprint for BSc Software Engineering students from Bangladesh. Navigate AI disruption, build rare skills, and achieve global competitiveness in 18 months.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-blue-200 dark:border-blue-800">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">18</div>
          <p className="text-sm text-slate-700 dark:text-slate-300">Months to Professional Ready</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border-green-200 dark:border-green-800">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">8</div>
          <p className="text-sm text-slate-700 dark:text-slate-300">Portfolio Projects</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-purple-200 dark:border-purple-800">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$80K+</div>
          <p className="text-sm text-slate-700 dark:text-slate-300">Global Salary Range</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border-orange-200 dark:border-orange-800">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5</div>
          <p className="text-sm text-slate-700 dark:text-slate-300">Core Phases</p>
        </Card>
      </div>

      {/* Main Sections */}
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sections.map((section) => {
          const SectionIcon = section.icon;
          const isExpanded = expandedSection === section.id;

          return (
            <motion.div key={section.id} variants={itemVariants}>
              <Card
                className={`bg-gradient-to-br ${section.color} border-2 ${section.borderColor} overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <SectionIcon className="w-6 h-6 text-slate-900 dark:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 line-clamp-2">
                    {section.content}
                  </p>
                </div>

                {isExpanded && (
                  <div className="border-t border-slate-200 dark:border-slate-700 p-6 bg-white/50 dark:bg-slate-800/50">
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {section.content}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Read the full blueprint for detailed implementation strategies</span>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 18-Month Phases */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-800/30 border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">18-Month Execution Timeline</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { phase: 'Phase 1', months: '0-3', focus: 'Foundations', color: 'bg-blue-100 dark:bg-blue-950/30' },
            { phase: 'Phase 2', months: '3-6', focus: 'Security Fundamentals', color: 'bg-green-100 dark:bg-green-950/30' },
            { phase: 'Phase 3', months: '6-9', focus: 'Advanced + ML', color: 'bg-purple-100 dark:bg-purple-950/30' },
            { phase: 'Phase 4', months: '9-12', focus: 'Specialization', color: 'bg-orange-100 dark:bg-orange-950/30' },
            { phase: 'Phase 5', months: '12-18', focus: 'Professional Ready', color: 'bg-red-100 dark:bg-red-950/30' },
          ].map((item, idx) => (
            <div key={idx} className={`${item.color} p-4 rounded-lg border border-slate-200 dark:border-slate-700`}>
              <div className="font-bold text-slate-900 dark:text-white">{item.phase}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.months}</div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.focus}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Core Skills */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200 dark:border-indigo-800">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Skill Stack</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Must Learn (Non-Negotiable)</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Bash', 'Linux', 'Networking', 'Cryptography', 'Web Security'].map((skill) => (
                <Badge key={skill} className="bg-blue-600 hover:bg-blue-700">{skill}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Should Learn (High Priority)</h4>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Backend Stack', 'Cloud/DevOps', 'System Design'].map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-3">Learn Later (Lower Priority)</h4>
            <div className="flex flex-wrap gap-2">
              {['Advanced Cloud', 'Specialized Certs', 'Emerging Tech'].map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Portfolio Projects */}
      <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">8-Project Portfolio Strategy</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { level: 'Beginner', projects: ['Port Scanner', 'Bash Toolkit'] },
            { level: 'Intermediate', projects: ['Web Scanner', 'ML Anomaly Detector', 'Encryption Tool'] },
            { level: 'Advanced', projects: ['Exploit Dev', 'Threat Intelligence Aggregator'] },
            { level: 'Capstone', projects: ['End-to-End Security System'] },
          ].map((category, idx) => (
            <div key={idx} className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{category.level}</h4>
              <ul className="space-y-1">
                {category.projects.map((proj, pidx) => (
                  <li key={pidx} className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    {proj}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Income Strategy */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Income Strategy Timeline</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <span className="font-semibold text-slate-900 dark:text-white">Months 0-6</span>
            <span className="text-slate-700 dark:text-slate-300">Open-source + Content ($0-500/mo)</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <span className="font-semibold text-slate-900 dark:text-white">Months 6-12</span>
            <span className="text-slate-700 dark:text-slate-300">Bug Bounties + Internships ($500-2000/mo)</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <span className="font-semibold text-slate-900 dark:text-white">Months 12-18</span>
            <span className="text-slate-700 dark:text-slate-300">Remote Jobs + Consulting ($5000+/mo)</span>
          </div>
        </div>
      </Card>

      {/* Key Mistakes to Avoid */}
      <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200 dark:border-red-800">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Critical Mistakes to Avoid</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { mistake: 'Tutorial Addiction', solution: 'For every 1 hour of tutorials, spend 2 hours building' },
            { mistake: 'Too Many Skills', solution: 'Focus on one primary skill per month' },
            { mistake: 'Fake Productivity', solution: 'Track outputs (projects, writeups), not inputs (hours watched)' },
            { mistake: 'Blind AI Dependency', solution: 'Solve 1 hour/day without AI assistance' },
            { mistake: 'Weak Fundamentals', solution: 'Master fundamentals before advanced topics' },
            { mistake: 'Shallow Projects', solution: 'Every project must be production-grade' },
            { mistake: 'No Documentation', solution: 'Include README, tests, and deployment instructions' },
            { mistake: 'No Visibility', solution: 'Publish work, engage community, build personal brand' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
              <div className="font-bold text-red-600 dark:text-red-400 mb-2">❌ {item.mistake}</div>
              <div className="text-sm text-slate-700 dark:text-slate-300">✅ {item.solution}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
        <h3 className="text-2xl font-bold mb-3">Ready to Execute?</h3>
        <p className="mb-4">This blueprint is worthless without action. Download the full career blueprint document and start this week. Your future self will thank you.</p>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors">
            Download Full Blueprint
          </button>
          <button className="px-6 py-2 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
            Join Community
          </button>
        </div>
      </Card>
    </div>
  );
}
