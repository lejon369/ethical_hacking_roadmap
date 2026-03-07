import { SearchResult } from '@/hooks/useSearch';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Wrench, Link2, Lightbulb } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  onSelectStage: (stageId: number | null) => void;
}

export default function SearchResults({ results, onSelectStage }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <Lightbulb className="w-12 h-12 text-slate-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">No results found</h3>
        <p className="text-slate-600 dark:text-slate-400">Try searching for topics, tools, or platforms</p>
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'stage':
        return <BookOpen className="w-5 h-5" />;
      case 'tool':
        return <Wrench className="w-5 h-5" />;
      case 'resource':
        return <Link2 className="w-5 h-5" />;
      default:
        return <Lightbulb className="w-5 h-5" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'stage':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'tool':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      case 'resource':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      default:
        return 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Search Results
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Found {results.length} result{results.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid gap-4">
        {results.map((result, idx) => (
          <Card
            key={idx}
            className="p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => {
              if (result.stageId) {
                onSelectStage(result.stageId);
              } else if (result.url) {
                window.open(result.url, '_blank');
              }
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg flex-shrink-0">
                {getIcon(result.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">
                    {result.title}
                  </h3>
                  <Badge className={getBadgeColor(result.type)}>
                    {result.type}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {result.description}
                </p>
                {result.stageName && (
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    From: <span className="font-semibold">{result.stageName}</span>
                  </p>
                )}
                {result.url && (
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Click to visit →
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
