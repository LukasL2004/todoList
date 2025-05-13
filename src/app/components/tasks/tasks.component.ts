import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TaskBodyComponent } from './task-body/task-body.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../auth.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks-manager',
  standalone: true,
  imports: [TaskBodyComponent, AddTaskComponent, AsyncPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  userId: string | null = null;
  userName: string | null = null;
  userTask: Observable<any[]> = of([]);
  addTaskStatus = false;

  destroyRef = inject(DestroyRef);
  private taskService = inject(TasksService);

  constructor(private route: ActivatedRoute, public authService: AuthService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((param) => {
        this.userId = param.get('userId');
        this.userName = param.get('name');

        if (this.userId) {
          this.userTask = this.taskService.getUserTasks(this.userId);
        }
      });
  }

  addTask() {
    this.addTaskStatus = true;
  }

  cancelTask() {
    this.addTaskStatus = false;
  }
}
