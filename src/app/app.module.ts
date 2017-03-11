import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig } from 'ionic-angular';
import { MyApp } from './app.component';
import { GameDetailsPage } from '../pages/game-details/game-details';
import { GameListPage } from '../pages/games-list/games';
import { ProposalPage } from '../pages/proposal/proposal';
import { FacebookLoginComponent } from '../pages/facebook-login/facebook-login';
import { AuthenticationService } from '../services/auth/authentication.service';
import { UserService } from '../services/user.service';
import { Config } from '../services/config.service';
//import { AuthGuard } from '../services/auth.guard';

export const deepLinkConfig: DeepLinkConfig = {
    links: [
        { component: ProposalPage, name: "Proposal", segment: "proposal/:proposalId"},
    ]
};

@NgModule({
  declarations: [
    MyApp,
    GameDetailsPage,
    GameListPage,
    ProposalPage,
    FacebookLoginComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, deepLinkConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GameDetailsPage,
    GameListPage,
    ProposalPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }, 
    AuthenticationService,
    Config,
    UserService
  ]
})
export class AppModule {}
