import { Injectable } from '@angular/core';
import { NewTaskData } from './tasks.model';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      description:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      description: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      description:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
    });
    this.saveTask();
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((user) => user.id !== id);
    this.saveTask();
  }

  saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
