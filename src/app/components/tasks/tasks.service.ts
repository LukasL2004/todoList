import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  addDoc,
  query,
  where,
} from '@angular/fire/firestore';
import { NewTaskData } from './tasks.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private firestore: Firestore) {}

  addTask(taskData: NewTaskData, userId: string): Promise<void> {
    const tasksRef = collection(this.firestore, 'tasks');
    const newTask = {
      userId: userId,
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
      createdAt: new Date(),
    };

    return addDoc(tasksRef, newTask).then(() => {});
  }

  getUserTasks(userId: string): Observable<any[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    const q = query(tasksRef, where('userId', '==', userId));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  deleteTask(taskId: string): Promise<void> {
    const taskDocRef = doc(this.firestore, `tasks/${taskId}`);
    return deleteDoc(taskDocRef);
  }
}
