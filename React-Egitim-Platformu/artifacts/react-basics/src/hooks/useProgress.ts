import { useState, useCallback } from "react";

const PROGRESS_KEY = "react-egitim-ilerleme-v2";
const OLD_PROGRESS_KEY = "react-egitim-ilerleme";

export interface TopicScore {
  bestScore: number;
  bestRaw: number;
  total: number;
  attempts: number;
  lastAttempt: number;
}

export interface ProgressData {
  completedTopics: string[];
  quizScores: Record<string, TopicScore>;
  lastVisited: { topicId: string; groupId: string } | null;
}

const DEFAULT_DATA: ProgressData = {
  completedTopics: [],
  quizScores: {},
  lastVisited: null,
};

function loadProgress(): ProgressData {
  try {
    const saved = localStorage.getItem(PROGRESS_KEY);
    if (saved) {
      return { ...DEFAULT_DATA, ...JSON.parse(saved) };
    }
    const old = localStorage.getItem(OLD_PROGRESS_KEY);
    if (old) {
      const completedTopics = JSON.parse(old) as string[];
      return { ...DEFAULT_DATA, completedTopics };
    }
  } catch {}
  return DEFAULT_DATA;
}

function saveProgress(data: ProgressData) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  } catch {}
}

export function useProgress() {
  const [data, setData] = useState<ProgressData>(loadProgress);

  const recordQuizScore = useCallback((topicId: string, score: number, total: number) => {
    const percent = Math.round((score / total) * 100);
    const passed = percent >= 60;
    setData((prev) => {
      const existing = prev.quizScores[topicId];
      const isBest = !existing || percent > existing.bestScore;
      const updatedScores: Record<string, TopicScore> = {
        ...prev.quizScores,
        [topicId]: {
          bestScore: isBest ? percent : existing.bestScore,
          bestRaw: isBest ? score : existing.bestRaw,
          total,
          attempts: (existing?.attempts ?? 0) + 1,
          lastAttempt: Date.now(),
        },
      };
      const completedTopics =
        passed && !prev.completedTopics.includes(topicId)
          ? [...prev.completedTopics, topicId]
          : prev.completedTopics;
      const next: ProgressData = { ...prev, quizScores: updatedScores, completedTopics };
      saveProgress(next);
      return next;
    });
  }, []);

  const setLastVisited = useCallback((topicId: string, groupId: string) => {
    setData((prev) => {
      const next: ProgressData = { ...prev, lastVisited: { topicId, groupId } };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    const fresh = DEFAULT_DATA;
    setData(fresh);
    saveProgress(fresh);
    try {
      localStorage.removeItem(OLD_PROGRESS_KEY);
    } catch {}
  }, []);

  return {
    completedTopics: new Set<string>(data.completedTopics),
    quizScores: data.quizScores,
    lastVisited: data.lastVisited,
    recordQuizScore,
    setLastVisited,
    resetProgress,
  };
}
