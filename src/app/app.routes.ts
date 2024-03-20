import { Routes } from '@angular/router';
import { Demo1Component } from './features/demo1/demo1.component';
import { Demo2Component } from './features/demo2/demo2.component';
import { Demo3Component } from './features/demo3/demo3.component';

export const routes: Routes = [
    { path: 'demo1', component: Demo1Component },
    { path: 'demo2', component: Demo2Component },
    { path: 'demo3', component: Demo3Component },
    { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

