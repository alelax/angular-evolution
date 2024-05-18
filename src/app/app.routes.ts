import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./features/home/home.component') },
    { path: 'cart', loadComponent: () => import('./features/cart/cart.component') },
    { path: 'settings', loadComponent: () => import('./features/settings/settings.component') },
    { 
        path: 'demo1', loadComponent: () => import('./features/demo1/demo1.component').then( file => file.Demo1Component ),
        data: { title: 'Hello page' }
    },
    { path: 'demo2', loadComponent: () => import('./features/demo2/demo2.component').then( file => file.Demo2Component ) },

    // Posso rimuovere il then se il componente nella sua classe è esportato as default
    { path: 'demo3', loadComponent: () => import('./features/demo3/demo3.component') },
    { path: 'product/:productId', loadComponent: () => import('./features/product/product.component') },
    {
        path: 'uikit',
        loadComponent: () => import('./features/uikit/uikit.component'),
        children: [
            { path: 'accordion', loadComponent: () => import('./features/uikit/pages/accordion-demo.component')},
            { path: 'alert', loadComponent: () => import('./features/uikit/pages/alert-demo.component')},
            { path: 'dropdown', loadComponent: () => import('./features/uikit/pages/dropdown-demo.component')},
            { path: 'phone', loadComponent: () => import('./features/uikit/pages/phone-demo.component')},
            { path: 'timeline', loadComponent: () => import('./features/uikit/pages/timeline-demo.component')},
            { path: 'variant-icon', loadComponent: () => import('./features/uikit/pages/variant-icon-demo.component')},
            { path: '', redirectTo: 'accordion', pathMatch: 'full'}
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

