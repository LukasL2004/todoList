import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TaskBodyComponent } from './task-body/task-body.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tasks',
  imports: [TaskBodyComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  userId: string | null = null;
  userName: string | null = null;
  destroyRef = inject(DestroyRef);

  private taskService = inject(TasksService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((param) => {
        this.userId = param.get('userId');
        this.userName = param.get('name');
      });
  }

  get userTask() {
    return this.taskService.getUserTasks(this.userId!);
  }

  addTaskStatus = false;

  addTask() {
    this.addTaskStatus = true;
  }

  cancelTask() {
    this.addTaskStatus = false;
  }
}
