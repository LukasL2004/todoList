import { Component, inject, input } from '@angular/core';
import { NewTaskData, Task } from './tasks.model';
import { TaskBodyComponent } from './task-body/task-body.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';
import { Dummy_users } from '../../dummy_users';

@Component({
  selector: 'app-tasks',
  imports: [TaskBodyComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = Dummy_users;

  private taskService = inject(TasksService);

  get userTask() {
    return this.taskService.getUserTasks(this.user[1].id);
  }

  addTaskStatus = false;

  addTask() {
    return (this.addTaskStatus = true);
  }

  cancelTask() {
    return (this.addTaskStatus = false);
  }
}
