import { Component, inject, input } from '@angular/core';
import { TaskBodyComponent } from './task-body/task-body.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskBodyComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  private taskService = inject(TasksService);

  get userTask() {
    return this.taskService.getUserTasks(this.userId());
  }
  addTaskStatus = false;

  addTask() {
    return (this.addTaskStatus = true);
  }
  cancelTask() {
    return (this.addTaskStatus = false);
  }
}
