import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { NouvellePartieComponent } from './components/pages/nouvelle-partie/nouvelle-partie.component';
import { EcranJeuComponent } from './components/pages/ecran-jeu/ecran-jeu.component';
import { NombreJoueursComponent } from './components/shared/nombre-joueurs/nombre-joueurs.component';
import { ListeRolesComponent } from './components/shared/liste-roles/liste-roles.component';
import { TempsMaxJourComponent } from './components/shared/temps-max-jour/temps-max-jour.component';
import { EquilibrageComponent } from './components/shared/equilibrage/equilibrage.component';
import { SwitchToggleComponent } from './components/shared/switch-toggle/switch-toggle.component';
import { FeuDeCampComponent } from './components/shared/feu-de-camp/feu-de-camp.component';
import { ChatInputComponent } from './components/shared/chat-input/chat-input.component';
import { CarteRoleComponent } from './components/shared/carte-role/carte-role.component';
import { JeuInfoComponent } from './components/shared/jeu-info/jeu-info.component';
import { ChatHistoryComponent } from './components/shared/chat-history/chat-history.component';
import { InfoTempsComponent } from './components/shared/info-temps/info-temps.component';
import { CarteChatComponent } from './components/shared/carte-chat/carte-chat.component';
import { BulleChatComponent } from './components/shared/bulle-chat/bulle-chat.component';
import { RolePopupComponent } from './components/shared/role-popup/role-popup.component';
import { JeuAnnonceComponent } from './components/shared/jeu-annonce/jeu-annonce.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { InputNumberComponent } from './components/shared/input-number/input-number.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NouvellePartieComponent,
    EcranJeuComponent,
    NombreJoueursComponent,
    ListeRolesComponent,
    TempsMaxJourComponent,
    EquilibrageComponent,
    SwitchToggleComponent,
    FeuDeCampComponent,
    ChatInputComponent,
    CarteRoleComponent,
    JeuInfoComponent,
    ChatHistoryComponent,
    InfoTempsComponent,
    CarteChatComponent,
    BulleChatComponent,
    RolePopupComponent,
    JeuAnnonceComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
