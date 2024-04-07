import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { NouvellePartieComponent } from './components/pages/nouvelle-partie/nouvelle-partie.component';
import { EcranJeuComponent } from './components/pages/ecran-jeu/ecran-jeu.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'new-game', component: NouvellePartieComponent },
  { path: 'in-game/:mode', component: EcranJeuComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: '**', redirectTo: '/accueil'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }