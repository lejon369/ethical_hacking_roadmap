import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CompletedItem {
  stageId: number;
  itemType: 'topic' | 'lab' | 'tool' | 'project';
  itemName: string;
}

interface ProgressContextType {
  completedItems: CompletedItem[];
  toggleCompletion: (item: CompletedItem) => void;
  isCompleted: (stageId: number, itemType: string, itemName: string) => boolean;
  getStageProgress: (stageId: number) => { completed: number; total: number; percentage: number };
  getTotalProgress: () => { completed: number; total: number; percentage: number };
  clearProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedItems, setCompletedItems] = useState<CompletedItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ethicalHackingProgress');
    if (saved) {
      try {
        setCompletedItems(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
  }, []);

  // Save to localStorage whenever completedItems changes
  useEffect(() => {
    localStorage.setItem('ethicalHackingProgress', JSON.stringify(completedItems));
  }, [completedItems]);

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

  const clearProgress = () => {
    setCompletedItems([]);
    localStorage.removeItem('ethicalHackingProgress');
  };

  return (
    <ProgressContext.Provider
      value={{
        completedItems,
        toggleCompletion,
        isCompleted,
        getStageProgress,
        getTotalProgress,
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
