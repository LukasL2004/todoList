import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "todolist-personal-project", appId: "1:950078819015:web:a016f2dd8a8d2c0deb0ce2", storageBucket: "todolist-personal-project.firebasestorage.app", apiKey: "AIzaSyAWoTkBtzhgM8z3ZAEwEsFb66Su5SUYAgU", authDomain: "todolist-personal-project.firebaseapp.com", messagingSenderId: "950078819015" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
};
