import { useState, useMemo } from 'react';
import { stages, tools, resources } from '@/lib/roadmapData';

export interface SearchResult {
  type: 'stage' | 'topic' | 'tool' | 'resource';
  title: string;
  description: string;
  stageId?: number;
  stageName?: string;
  url?: string;
}

export function useSearch(query: string): SearchResult[] {
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search stages
    stages.forEach((stage) => {
      if (stage.title.toLowerCase().includes(q) || stage.description.toLowerCase().includes(q)) {
        searchResults.push({
          type: 'stage',
          title: stage.title,
          description: stage.description,
          stageId: stage.id,
        });
      }

      // Search topics within stages
      stage.topics.forEach((topic) => {
        if (topic.name.toLowerCase().includes(q) || topic.description.toLowerCase().includes(q)) {
          searchResults.push({
            type: 'topic',
            title: topic.name,
            description: topic.description,
            stageId: stage.id,
            stageName: stage.title,
          });
        }
      });

      // Search labs
      stage.labs.forEach((lab) => {
        if (lab.toLowerCase().includes(q)) {
          searchResults.push({
            type: 'topic',
            title: lab,
            description: `Lab from ${stage.title}`,
            stageId: stage.id,
            stageName: stage.title,
          });
        }
      });

      // Search tools
      stage.tools.forEach((tool) => {
        if (tool.toLowerCase().includes(q)) {
          searchResults.push({
            type: 'tool',
            title: tool,
            description: `Tool used in ${stage.title}`,
            stageId: stage.id,
            stageName: stage.title,
          });
        }
      });

      // Search platforms
      stage.platforms.forEach((platform) => {
        if (platform.toLowerCase().includes(q)) {
          searchResults.push({
            type: 'resource',
            title: platform,
            description: `Practice platform for ${stage.title}`,
            stageId: stage.id,
            stageName: stage.title,
          });
        }
      });

      // Search projects
      stage.projects.forEach((project) => {
        if (project.toLowerCase().includes(q)) {
          searchResults.push({
            type: 'topic',
            title: project,
            description: `Project from ${stage.title}`,
            stageId: stage.id,
            stageName: stage.title,
          });
        }
      });
    });

    // Search tools
    tools.forEach((tool) => {
      if (tool.name.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q)) {
        searchResults.push({
          type: 'tool',
          title: tool.name,
          description: tool.description,
        });
      }
    });

    // Search resources
    resources.forEach((resource) => {
      if (resource.name.toLowerCase().includes(q) || resource.description.toLowerCase().includes(q)) {
        searchResults.push({
          type: 'resource',
          title: resource.name,
          description: resource.description,
          url: resource.url,
        });
      }
    });

    // Remove duplicates
    const seen = new Set<string>();
    return searchResults.filter((result) => {
      const key = `${result.type}-${result.title}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [query]);

  return results;
}
