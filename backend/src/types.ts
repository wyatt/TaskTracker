export interface HomeworkItem {
  id: number;
  activity: string;
  description: string;
  subject: string;
  due_date: string;
  due_reminder: any;
  available_date: string;
  completed: boolean;
  user_type: string;
  owner_id: string;
  format: number;
  duration: any;
  employee_received: any;
  set_by: string;
  cloneable: boolean;
  deletable: boolean;
  due_text: string;
  source: string;
  available_text: string;
  status: string;
  icon: string;
  attachments: any[];
}

export interface RescuetimeItem {
  0: number;
  1: number;
  2: number;
  3: string;
}
