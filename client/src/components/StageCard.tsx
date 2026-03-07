import { Stage } from '@/lib/roadmapData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, BookOpen, Wrench, Users, Target, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StageCardProps {
  stage: Stage;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function StageCard({ stage, isExpanded, onToggle }: StageCardProps) {
  const stageColors = [
    'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
    'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800',
    'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
    'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800',
    'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
    'bg-pink-50 dark:bg-pink-950 border-pink-200 dark:border-pink-800',
  ];

  const stageBadgeColors = [
    'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
  ];

  const colorIndex = (stage.id - 1) % stageColors.length;

  return (
    <Card
      className={`${stageColors[colorIndex]} border-2 cursor-pointer transition-all hover:shadow-lg`}
      onClick={onToggle}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Badge className={stageBadgeColors[colorIndex]}>Stage {stage.id}</Badge>
              <Badge variant="outline">{stage.duration}</Badge>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{stage.title}</h2>
            <p className="text-slate-700 dark:text-slate-300">{stage.description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 flex-shrink-0"
          >
            <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-current border-opacity-20"
            >
              {/* Topics */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Topics to Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {stage.topics.map((topic, idx) => (
                    <div key={idx} className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{topic.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{topic.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Why These Topics Matter</h3>
                <ul className="space-y-2">
                  {stage.explanation.map((exp, idx) => (
                    <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Labs */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Practical Labs & Exercises
                </h3>
                <ul className="space-y-2">
                  {stage.labs.map((lab, idx) => (
                    <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                      <span className="text-green-600 dark:text-green-400">✓</span>
                      {lab}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Recommended Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stage.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white/70 dark:bg-slate-800/70">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Practice Platforms
                </h3>
                <ul className="space-y-2">
                  {stage.platforms.map((platform, idx) => (
                    <li key={idx} className="text-sm text-slate-700 dark:text-slate-300">
                      • {platform}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Mini-Projects</h3>
                <ul className="space-y-2">
                  {stage.projects.map((project, idx) => (
                    <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes */}
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Common Mistakes to Avoid
                </h3>
                <ul className="space-y-2">
                  {stage.mistakes.map((mistake, idx) => (
                    <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                      <span className="text-red-600 dark:text-red-400">⚠</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
