export interface HomeworkItem {
  id: number;
  name: string;
  subject: string;
  due: string;
  completed: boolean;
}

export interface RescueTimeData {
  total: number;
  productive: number;
  distracting: number;
  neutral: number;
}
