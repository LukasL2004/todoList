export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  dueDate: string;
}

export interface NewTaskData {
  title: string;
  description: string;
  dueDate: string;
}
