import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: "",
    loadComponent: () => import("./exercices").then(c => c.Exercices)
   }, 
   {
    path: "profil-dynamique",
    loadComponent: () => import("./profil-dynamique/profil-dynamique").then(c => c.ProfilDynamique)
   }, 
];