import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component').then( file => file.Demo1Component ),
        data: { title: 'Hello page' }
    },
    { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component').then( file => file.Demo2Component ) },

    // Posso rimuovere il then se il componente nella sua classe è esportato as default
    { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') },
    { path: '', redirectTo: 'demo1', pathMatch: 'full' }
];

