// Eğitim içeriği veri tipleri

export type CodeExample = {
  label: string;
  code: string;
  tip: string;
};

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type PracticeQuestion = {
  q: string;
  answer: string;
};

export type Topic = {
  id: string;
  title: string;
  group: string;
  explanation: string[];
  tip: string;
  examples: CodeExample[];
  practice: PracticeQuestion[];
  quiz: QuizQuestion[];
};

export type Group = {
  id: string;
  title: string;
  color: string;
  bgColor: string;
  textColor: string;
  activeBg: string;
  activeText: string;
  topics: Topic[];
};
