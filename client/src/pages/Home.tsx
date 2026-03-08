import { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, BookOpen, Zap, Target, Award, Brain } from 'lucide-react';
import { stages, timeline, tools, resources } from '@/lib/roadmapData';
import { useSearch } from '@/hooks/useSearch';
import StageCard from '@/components/StageCard';
import SearchResults from '@/components/SearchResults';
import TimelineView from '@/components/TimelineView';
import ProgressBar from '@/components/ProgressBar';
import ProgressStats from '@/components/ProgressStats';
import ProgrammingSection from '@/components/ProgrammingSection';
import SixHatSolutions from '@/components/SixHatSolutions';
import ComprehensiveRoadmap from '@/components/ComprehensiveRoadmap';
import Hero from '@/components/Hero';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const searchResults = useSearch(searchQuery);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <Hero onExplore={handleExplore} />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Ethical Hacking Roadmap</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Your guide to becoming a security researcher</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Search topics, tools, platforms, labs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main ref={contentRef} className="container py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar />
        </div>

        {/* Progress Stats */}
        <ProgressStats />

        {searchQuery ? (
          <SearchResults results={searchResults} onSelectStage={setActiveStage} />
        ) : (
          <Tabs defaultValue="stages" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="stages">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Stages</span>
              </TabsTrigger>
              <TabsTrigger value="programming">
                <Zap className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Programming</span>
              </TabsTrigger>
              <TabsTrigger value="hats">
                <Brain className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">6 Hats</span>
              </TabsTrigger>
              <TabsTrigger value="roadmap">
                <Target className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">3-Year</span>
              </TabsTrigger>
              <TabsTrigger value="timeline">
                <Award className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Timeline</span>
              </TabsTrigger>
              <TabsTrigger value="resources">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Resources</span>
              </TabsTrigger>
            </TabsList>

            {/* Stages Tab */}
            <TabsContent value="stages" className="space-y-6 scroll-mt-20 py-6">
              <div className="grid gap-6">
                {stages.map((stage) => (
                  <StageCard
                    key={stage.id}
                    stage={stage}
                    isExpanded={activeStage === stage.id}
                    onToggle={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Programming Tab */}
            <TabsContent value="programming" className="space-y-6 scroll-mt-20 py-6">
              <ProgrammingSection />
            </TabsContent>

            {/* Six Hats Tab */}
            <TabsContent value="hats" className="space-y-6 scroll-mt-20 py-6">
              <SixHatSolutions />
            </TabsContent>

            {/* 3-Year Roadmap Tab */}
            <TabsContent value="roadmap" className="space-y-6 scroll-mt-20 py-6">
              <ComprehensiveRoadmap />
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-6 scroll-mt-20 py-6">
              <TimelineView timeline={timeline} />
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6 scroll-mt-20 py-6">
              <div className="grid gap-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tools & Platforms</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Tools */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Essential Tools</h3>
                    <div className="grid gap-3">
                      {tools.slice(0, 5).map((tool) => (
                        <Card key={tool.name} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 dark:text-white">{tool.name}</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{tool.description}</p>
                            </div>
                            <Badge variant="secondary" className="ml-2">{tool.category}</Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Practice Platforms</h3>
                    <div className="grid gap-3">
                      {resources.map((resource) => (
                        <Card key={resource.name} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                {resource.name}
                              </a>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{resource.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
}
