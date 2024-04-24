import { Routes } from '@angular/router';
import { Step1Component } from './steps/step1/step1.component';
import { stepsGuard } from './guards/steps.guard';

export const routes: Routes = [
  {
    path: '',
    component: Step1Component
  },
  {
    path: 'step2/:model',
    loadComponent: () => import('./steps/step2/step2.component').then(m => m.Step2Component),
    canActivate: [stepsGuard]
  },
  {
    path: 'step3',
    loadComponent: () => import('./steps/step3/step3.component').then(m => m.Step3Component),
    canActivate: [stepsGuard]
  },
];
