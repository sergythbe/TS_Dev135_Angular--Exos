import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./features/exercices/exercices").then(c => c.Exercices)
    },
    {
        path: "exercices",
        loadChildren: () => import("./features/exercices/exercices.routes").then(r => r.routes)
    },
];
