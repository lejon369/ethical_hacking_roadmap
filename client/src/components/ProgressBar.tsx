import { useProgress } from '@/contexts/ProgressContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgressBar() {
  const { getTotalProgress, clearProgress } = useProgress();
  const progress = getTotalProgress();

  const handleClearProgress = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      clearProgress();
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Your Learning Progress</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {progress.completed} of {progress.total} items completed
            </p>
          </div>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleClearProgress}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress.percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
        />
      </div>

      {/* Percentage */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {progress.percentage}% Complete
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-500">
          Keep learning! You're making great progress.
        </p>
      </div>
    </Card>
  );
}
