
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE_SEQUENCE = 'TRUE_FALSE_SEQUENCE',
  MATCHING = 'MATCHING',
  MULTI_SELECT = 'MULTI_SELECT'
}

export interface Option {
  id: string;
  text: string;
}

export interface MatchingPair {
  leftId: string;
  leftText: string;
  rightId: string;
  rightText: string;
}

export interface Question {
  id: number;
  topic: string;
  type: QuestionType;
  content: string;
  options?: Option[];
  correctAnswer?: string; // For MULTIPLE_CHOICE
  correctSequence?: string[]; // For TRUE_FALSE_SEQUENCE
  correctPairs?: Record<string, string>; // For MATCHING (leftId -> rightId)
  matchingOptions?: { left: Option[], right: Option[] }; // For MATCHING
  correctIds?: string[]; // For MULTI_SELECT
}

export interface UserAnswer {
  questionId: number;
  answer: any;
  isCorrect: boolean;
}

export interface AppState {
  userName: string;
  isLoggedIn: boolean;
  currentStep: 'login' | 'quiz' | 'result' | 'review';
  userAnswers: UserAnswer[];
  score: number;
}
