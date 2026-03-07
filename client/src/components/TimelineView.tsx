import { TimelineEntry } from '@/lib/roadmapData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Target, BookOpen, Trophy } from 'lucide-react';

interface TimelineViewProps {
  timeline: TimelineEntry[];
}

export default function TimelineView({ timeline }: TimelineViewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">24-Month Learning Timeline</h2>
        <p className="text-slate-600 dark:text-slate-400">
          A structured progression through all stages of ethical hacking mastery
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

        {/* Timeline items */}
        <div className="space-y-6 ml-24">
          {timeline.map((entry, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-20 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950"></div>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        Months {entry.months}
                      </h3>
                    </div>
                    <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {entry.stage}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Goals */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Learning Goals
                    </h4>
                    <ul className="space-y-2">
                      {entry.goals.map((goal, i) => (
                        <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                          <span className="text-green-600 dark:text-green-400">✓</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Labs & Projects */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Hands-On Work
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">Labs</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{entry.labs.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase mb-1">Projects</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{entry.projects.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTF Info */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold">CTF Progress:</span> {entry.ctf}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Timeline Summary</h3>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li className="flex gap-2">
            <span className="font-semibold text-blue-600 dark:text-blue-400">Months 1-4:</span>
            Foundation building with fundamentals and basic networking
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-purple-600 dark:text-purple-400">Months 5-10:</span>
            Web security and offensive security skills development
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-pink-600 dark:text-pink-400">Months 11-24:</span>
            Advanced topics, reverse engineering, and competitive CTF participation
          </li>
        </ul>
      </Card>
    </div>
  );
}
