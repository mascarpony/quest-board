export interface IQuest {
  id: number;
  title: string;
  description: string;
  customer: string;
  complexity: Complexity;
  reward: string[];
  accepted?: boolean;
}

type Complexity = 1 | 2 | 3 | 4 | 5;
