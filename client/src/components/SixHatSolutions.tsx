import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Brain, Zap, AlertCircle, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export default function SixHatSolutions() {
  const hats = [
    {
      id: 'white',
      name: 'White Hat',
      color: 'from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700',
      borderColor: 'border-slate-400 dark:border-slate-600',
      icon: Brain,
      description: 'Facts & Information',
      details: 'Focus on objective facts, data, and information gathering',
      applications: [
        'Reconnaissance and information gathering',
        'Network mapping and asset discovery',
        'Vulnerability scanning and assessment',
        'Documentation and reporting',
        'Baseline security analysis'
      ],
      color_code: 'bg-slate-500'
    },
    {
      id: 'red',
      name: 'Red Hat',
      color: 'from-red-100 to-rose-200 dark:from-red-900 dark:to-rose-800',
      borderColor: 'border-red-400 dark:border-red-600',
      icon: AlertCircle,
      description: 'Intuition & Emotions',
      details: 'Trust your gut feelings and intuitive judgments about security risks',
      applications: [
        'Identifying suspicious patterns',
        'Detecting anomalies in behavior',
        'Recognizing social engineering attempts',
        'Assessing threat likelihood',
        'Prioritizing critical vulnerabilities'
      ],
      color_code: 'bg-red-500'
    },
    {
      id: 'black',
      name: 'Black Hat',
      color: 'from-gray-900 to-slate-900 dark:from-gray-950 dark:to-slate-950',
      borderColor: 'border-gray-700 dark:border-gray-800',
      icon: AlertCircle,
      description: 'Critical Thinking',
      details: 'Identify weaknesses, risks, and worst-case scenarios',
      applications: [
        'Vulnerability exploitation planning',
        'Attack surface analysis',
        'Risk assessment and impact analysis',
        'Identifying security gaps',
        'Defensive strategy development'
      ],
      color_code: 'bg-gray-700'
    },
    {
      id: 'green',
      name: 'Green Hat',
      color: 'from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800',
      borderColor: 'border-green-400 dark:border-green-600',
      icon: Lightbulb,
      description: 'Creativity & Innovation',
      details: 'Generate creative solutions and novel security approaches',
      applications: [
        'Developing new security tools',
        'Creating innovative defense mechanisms',
        'Brainstorming attack vectors',
        'Designing security architectures',
        'Implementing novel solutions'
      ],
      color_code: 'bg-green-500'
    },
    {
      id: 'yellow',
      name: 'Yellow Hat',
      color: 'from-yellow-100 to-amber-200 dark:from-yellow-900 dark:to-amber-800',
      borderColor: 'border-yellow-400 dark:border-yellow-600',
      icon: TrendingUp,
      description: 'Optimism & Benefits',
      details: 'Focus on positive outcomes and opportunities for improvement',
      applications: [
        'Identifying security improvements',
        'Recognizing opportunities for hardening',
        'Planning security enhancements',
        'Assessing positive security impacts',
        'Building resilience strategies'
      ],
      color_code: 'bg-yellow-500'
    },
    {
      id: 'blue',
      name: 'Blue Hat',
      color: 'from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-800',
      borderColor: 'border-blue-400 dark:border-blue-600',
      icon: CheckCircle,
      description: 'Process Control',
      details: 'Manage the thinking process and coordinate perspectives',
      applications: [
        'Organizing security assessments',
        'Coordinating team perspectives',
        'Managing penetration testing phases',
        'Controlling security reviews',
        'Facilitating team discussions'
      ],
      color_code: 'bg-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
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
          <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Six Hat Solutions for Ethical Hacking
          </h2>
        </div>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
          Apply Edward de Bono's Six Thinking Hats methodology to approach security challenges from multiple perspectives. Each hat represents a different thinking mode to enhance your problem-solving and decision-making in ethical hacking.
        </p>
      </div>

      {/* Introduction Card */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
          Why Six Hats Thinking?
        </h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          The Six Thinking Hats method helps security professionals think more clearly and creatively. Instead of conflicting arguments, each hat represents a distinct thinking mode, allowing you to:
        </p>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
            <span>Analyze security issues from multiple angles simultaneously</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
            <span>Reduce conflict and improve team collaboration</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
            <span>Make better decisions by considering all perspectives</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
            <span>Enhance creativity in security solution development</span>
          </li>
        </ul>
      </Card>

      {/* Six Hats Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {hats.map((hat) => {
          const Icon = hat.icon;
          return (
            <motion.div key={hat.id} variants={itemVariants}>
              <Card
                className={`p-6 bg-gradient-to-br ${hat.color} border-2 ${hat.borderColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group cursor-pointer`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`${hat.color_code} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {hat.name}
                      </h3>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {hat.description}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 font-medium">
                  {hat.details}
                </p>

                {/* Applications */}
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                    In Ethical Hacking:
                  </h4>
                  <ul className="space-y-2">
                    {hat.applications.map((app, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className={`${hat.color_code} rounded-full w-1.5 h-1.5 mt-1.5 flex-shrink-0`}></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Workflow Card */}
      <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Applying Six Hats to Penetration Testing
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Reconnaissance Phase</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><span className="font-semibold">White:</span> Gather factual information</li>
              <li><span className="font-semibold">Red:</span> Identify suspicious patterns</li>
              <li><span className="font-semibold">Black:</span> Assess vulnerabilities</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Exploitation Phase</h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><span className="font-semibold">Green:</span> Create novel attack vectors</li>
              <li><span className="font-semibold">Yellow:</span> Plan defensive improvements</li>
              <li><span className="font-semibold">Blue:</span> Coordinate team actions</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Team Collaboration Card */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200 dark:border-indigo-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Team Collaboration Benefits
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sequential Thinking</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Each team member focuses on one hat at a time, ensuring all perspectives are considered systematically.
            </p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Parallel Thinking</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              All team members think in the same direction simultaneously, improving efficiency and reducing conflict.
            </p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Balanced Decisions</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Comprehensive analysis leads to better security decisions and more effective penetration testing strategies.
            </p>
          </div>
        </div>
      </Card>

      {/* Quick Reference */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Quick Reference: When to Use Each Hat
        </h3>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">White Hat:</span> When you need objective data and facts about the target system
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Red Hat:</span> When making judgments about threat likelihood and risk severity
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Black Hat:</span> When identifying weaknesses and planning defensive strategies
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Green Hat:</span> When brainstorming new attack techniques or security solutions
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Yellow Hat:</span> When evaluating positive security outcomes and improvements
          </p>
          <p>
            <span className="font-semibold text-slate-900 dark:text-white">Blue Hat:</span> When organizing assessments and managing team discussions
          </p>
        </div>
      </Card>
    </div>
  );
}
