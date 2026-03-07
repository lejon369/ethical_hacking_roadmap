import { useProgress } from '@/contexts/ProgressContext';
import { Card } from '@/components/ui/card';
import { stages } from '@/lib/roadmapData';
import { TrendingUp, Award, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgressStats() {
  const { getStageProgress, getTotalProgress } = useProgress();
  const totalProgress = getTotalProgress();

  const completedStages = stages.filter((stage) => {
    const progress = getStageProgress(stage.id);
    return progress.percentage === 100;
  }).length;

  const stats = [
    {
      icon: TrendingUp,
      label: 'Overall Progress',
      value: `${totalProgress.percentage}%`,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Award,
      label: 'Completed Stages',
      value: `${completedStages}/${stages.length}`,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: Target,
      label: 'Items Completed',
      value: totalProgress.completed,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: Zap,
      label: 'Items Remaining',
      value: totalProgress.total - totalProgress.completed,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={`${stat.bgColor} border-0 p-4`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    {stat.value}
                  </p>
                </div>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
