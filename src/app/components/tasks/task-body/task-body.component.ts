import { Component, inject, input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NewTaskData, Task } from '../tasks.model';

@Component({
  selector: 'app-task-body',
  imports: [],
  templateUrl: './task-body.component.html',
  styleUrl: './task-body.component.css',
})
export class TaskBodyComponent {
  tasks = input.required<Task>();
  private tasksService = inject(TasksService);

  removeTask() {
    this.tasksService.deleteTask(this.tasks().id);
  }
}
