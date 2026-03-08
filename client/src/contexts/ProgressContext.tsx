import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CompletedItem {
  stageId: number;
  itemType: 'topic' | 'lab' | 'tool' | 'project';
  itemName: string;
}

export interface RoadmapTask {
  id: string;
  year: number;
  semester: number;
  category: 'topic' | 'project' | 'language' | 'milestone';
  name: string;
  description?: string;
}

interface ProgressContextType {
  completedItems: CompletedItem[];
  completedRoadmapTasks: string[];
  toggleCompletion: (item: CompletedItem) => void;
  toggleRoadmapTask: (taskId: string) => void;
  isCompleted: (stageId: number, itemType: string, itemName: string) => boolean;
  isRoadmapTaskCompleted: (taskId: string) => boolean;
  getStageProgress: (stageId: number) => { completed: number; total: number; percentage: number };
  getTotalProgress: () => { completed: number; total: number; percentage: number };
  getRoadmapProgress: (year?: number) => { completed: number; total: number; percentage: number };
  getYearProgress: (year: number) => { completed: number; total: number; percentage: number };
  clearProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedItems, setCompletedItems] = useState<CompletedItem[]>([]);
  const [completedRoadmapTasks, setCompletedRoadmapTasks] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ethicalHackingProgress');
    const savedRoadmap = localStorage.getItem('roadmapProgress');
    if (saved) {
      try {
        setCompletedItems(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
    if (savedRoadmap) {
      try {
        setCompletedRoadmapTasks(JSON.parse(savedRoadmap));
      } catch (error) {
        console.error('Failed to load roadmap progress:', error);
      }
    }
  }, []);

  // Save to localStorage whenever completedItems changes
  useEffect(() => {
    localStorage.setItem('ethicalHackingProgress', JSON.stringify(completedItems));
  }, [completedItems]);

  // Save roadmap progress to localStorage
  useEffect(() => {
    localStorage.setItem('roadmapProgress', JSON.stringify(completedRoadmapTasks));
  }, [completedRoadmapTasks]);

  const toggleCompletion = (item: CompletedItem) => {
    setCompletedItems((prev) => {
      const exists = prev.some(
        (i) => i.stageId === item.stageId && i.itemType === item.itemType && i.itemName === item.itemName
      );

      if (exists) {
        return prev.filter(
          (i) => !(i.stageId === item.stageId && i.itemType === item.itemType && i.itemName === item.itemName)
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const isCompleted = (stageId: number, itemType: string, itemName: string): boolean => {
    return completedItems.some(
      (i) => i.stageId === stageId && i.itemType === itemType && i.itemName === itemName
    );
  };

  const getStageProgress = (stageId: number) => {
    // This will be calculated based on topics, labs, projects in each stage
    // For now, we'll count all items in a stage
    const stageItems = completedItems.filter((i) => i.stageId === stageId);
    
    // Estimate total items per stage (topics + labs + projects)
    const estimatedTotal = 15; // Approximate based on roadmap data
    
    return {
      completed: stageItems.length,
      total: estimatedTotal,
      percentage: Math.round((stageItems.length / estimatedTotal) * 100),
    };
  };

  const getTotalProgress = () => {
    // 6 stages * ~15 items per stage = ~90 total items
    const totalItems = 90;
    const completed = completedItems.length;
    
    return {
      completed,
      total: totalItems,
      percentage: Math.round((completed / totalItems) * 100),
    };
  };

  const toggleRoadmapTask = (taskId: string) => {
    setCompletedRoadmapTasks((prev) => {
      if (prev.includes(taskId)) {
        return prev.filter((id) => id !== taskId);
      } else {
        return [...prev, taskId];
      }
    });
  };

  const isRoadmapTaskCompleted = (taskId: string): boolean => {
    return completedRoadmapTasks.includes(taskId);
  };

  const getRoadmapProgress = (year?: number) => {
    let totalTasks = 75;
    let completedTasks = completedRoadmapTasks.length;

    if (year) {
      const yearTaskCounts: Record<number, number> = { 1: 20, 2: 25, 3: 30 };
      totalTasks = yearTaskCounts[year] || 20;
      completedTasks = completedRoadmapTasks.filter((id) => id.startsWith(`year${year}`)).length;
    }

    return {
      completed: completedTasks,
      total: totalTasks,
      percentage: Math.round((completedTasks / totalTasks) * 100),
    };
  };

  const getYearProgress = (year: number) => {
    const yearTaskCounts: Record<number, number> = { 1: 20, 2: 25, 3: 30 };
    const totalTasks = yearTaskCounts[year] || 20;
    const completedTasks = completedRoadmapTasks.filter((id) => id.startsWith(`year${year}`)).length;

    return {
      completed: completedTasks,
      total: totalTasks,
      percentage: Math.round((completedTasks / totalTasks) * 100),
    };
  };

  const clearProgress = () => {
    setCompletedItems([]);
    localStorage.removeItem('ethicalHackingProgress');
  };

  return (
    <ProgressContext.Provider
      value={{
        completedItems,
        completedRoadmapTasks,
        toggleCompletion,
        toggleRoadmapTask,
        isCompleted,
        isRoadmapTaskCompleted,
        getStageProgress,
        getTotalProgress,
        getRoadmapProgress,
        getYearProgress,
        clearProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
