import { programmingLanguages, programmingPaths } from '@/lib/roadmapData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, BookOpen, Zap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgrammingSection() {
  const difficultyColors = {
    Beginner: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    Intermediate: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    Advanced: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Programming for Ethical Hackers
          </h2>
        </div>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Master the programming languages essential for security research, exploit development, and building custom security tools.
        </p>
      </div>

      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="languages">
            <Code2 className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Languages</span>
          </TabsTrigger>
          <TabsTrigger value="paths">
            <Zap className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Learning Paths</span>
          </TabsTrigger>
        </TabsList>

        {/* Languages Tab */}
        <TabsContent value="languages" className="space-y-6">
          <div className="grid gap-6">
            {programmingLanguages.map((lang, idx) => (
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {lang.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className={difficultyColors[lang.difficulty]}>
                          {lang.difficulty}
                        </Badge>
                        <Badge variant="outline">Stage {lang.stage}</Badge>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        {lang.description}
                      </p>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Primary Use Cases
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {lang.useCases.map((useCase, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-white/50 dark:bg-slate-700/50 rounded"
                        >
                          <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">
                            •
                          </span>
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Learning Resources
                    </h4>
                    <div className="space-y-2">
                      {lang.resources.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white/70 dark:bg-slate-700/70 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors group"
                        >
                          <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {resource.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Hands-On Projects
                    </h4>
                    <div className="space-y-2">
                      {lang.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-white/50 dark:bg-slate-700/50 rounded border-l-4 border-blue-500"
                        >
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Related Tools & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lang.tools.map((tool, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Learning Paths Tab */}
        <TabsContent value="paths" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {programmingPaths.map((path, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {path.name}
                      </h3>
                      <Badge variant="outline" className="mb-4">
                        Stage {path.stage}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 flex-1">
                    {path.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {path.languages.map((lang, idx) => (
                          <Badge
                            key={idx}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold">Estimated Duration:</span> {path.duration}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Learning Path Recommendations */}
          <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Choosing Your Path
            </h3>
            <div className="space-y-3 text-slate-700 dark:text-slate-300">
              <p>
                <span className="font-semibold">Web Security Path:</span> Start here if you're interested in finding vulnerabilities in web applications and participating in bug bounty programs.
              </p>
              <p>
                <span className="font-semibold">Exploit Development Path:</span> Choose this if you want to master low-level exploitation, binary analysis, and advanced vulnerability research.
              </p>
              <p>
                <span className="font-semibold">Red Team Path:</span> Perfect for those interested in offensive security, malware development, and advanced post-exploitation techniques.
              </p>
              <p>
                <span className="font-semibold">Reverse Engineering Path:</span> Ideal for analyzing binaries, understanding malware behavior, and security research.
              </p>
              <p>
                <span className="font-semibold">Full Stack Hacker Path:</span> The comprehensive approach covering all aspects of ethical hacking and security research.
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Tips */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
          Programming Tips for Hackers
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Start with Python - it's the most versatile and beginner-friendly language for security</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Learn Bash scripting early - it's essential for Linux automation and reconnaissance</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Build real projects - don't just watch tutorials, create working security tools</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Understand algorithms and data structures - they're crucial for exploit development</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Read other people's code - study open-source security tools and frameworks</span>
          </li>
          <li className="flex gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Practice debugging - learning to debug code is as important as writing it</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}
