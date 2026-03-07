import { Stage } from '@/lib/roadmapData';
import { useProgress } from '@/contexts/ProgressContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, BookOpen, Wrench, Users, Target, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StageCardProps {
  stage: Stage;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function StageCard({ stage, isExpanded, onToggle }: StageCardProps) {
  const { isCompleted, toggleCompletion, getStageProgress } = useProgress();
  const progress = getStageProgress(stage.id);

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

  const handleTopicToggle = (topic: string) => {
    toggleCompletion({
      stageId: stage.id,
      itemType: 'topic',
      itemName: topic,
    });
  };

  const handleLabToggle = (lab: string) => {
    toggleCompletion({
      stageId: stage.id,
      itemType: 'lab',
      itemName: lab,
    });
  };

  const handleProjectToggle = (project: string) => {
    toggleCompletion({
      stageId: stage.id,
      itemType: 'project',
      itemName: project,
    });
  };

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
              {progress.percentage === 100 && (
                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Complete
                </Badge>
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{stage.title}</h2>
            <p className="text-slate-700 dark:text-slate-300">{stage.description}</p>
            
            {/* Progress bar for stage */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.percentage}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {progress.completed}/{progress.total}
              </span>
            </div>
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
              onClick={(e) => e.stopPropagation()}
            >
              {/* Topics */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Topics to Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {stage.topics.map((topic, idx) => {
                    const isTopicCompleted = isCompleted(stage.id, 'topic', topic.name);
                    return (
                      <div
                        key={idx}
                        className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-white/70 dark:hover:bg-slate-900/70 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTopicToggle(topic.name);
                        }}
                      >
                        <Checkbox
                          checked={isTopicCompleted}
                          onChange={() => {}}
                          className="mt-1 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className={`font-semibold ${isTopicCompleted ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                            {topic.name}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{topic.description}</p>
                        </div>
                      </div>
                    );
                  })}
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
                <div className="space-y-2">
                  {stage.labs.map((lab, idx) => {
                    const isLabCompleted = isCompleted(stage.id, 'lab', lab);
                    return (
                      <div
                        key={idx}
                        className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-white/70 dark:hover:bg-slate-900/70 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLabToggle(lab);
                        }}
                      >
                        <Checkbox
                          checked={isLabCompleted}
                          onChange={() => {}}
                          className="flex-shrink-0"
                        />
                        <span className={`text-sm flex-1 ${isLabCompleted ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                          {lab}
                        </span>
                      </div>
                    );
                  })}
                </div>
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
                <div className="space-y-2">
                  {stage.projects.map((project, idx) => {
                    const isProjectCompleted = isCompleted(stage.id, 'project', project);
                    return (
                      <div
                        key={idx}
                        className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-white/70 dark:hover:bg-slate-900/70 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectToggle(project);
                        }}
                      >
                        <Checkbox
                          checked={isProjectCompleted}
                          onChange={() => {}}
                          className="flex-shrink-0"
                        />
                        <span className={`text-sm flex-1 ${isProjectCompleted ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                          {project}
                        </span>
                      </div>
                    );
                  })}
                </div>
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
