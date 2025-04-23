import {
  Component,
  EventEmitter,
  inject,
  input,
  NgModule,
  Output,
  output,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  userId = input.required<string>();
  close = output();

  enteredTitle = '';
  enteredDescription = '';
  enteredDueDate = '';

  private taskService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        description: this.enteredDescription,
        dueDate: this.enteredDueDate,
      },
      this.userId()
    );
    this.close.emit();

    console.log('Submitting with userId:', this.userId());

    console.log(
      this.enteredDescription,
      this.enteredTitle,
      this.enteredDueDate
    );
  }
}
