import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { GameListPage } from '../pages/games-list/games';
import { AuthenticationService } from '../services/auth/authentication.service'
//import { FacebookService } from '../services/auth/facebook.service';

@Component({
  templateUrl: 'app.html'
  //providers: [FacebookService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = GameListPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();

    authenticationService.Initialize();

    // set our app's pages
    this.pages = [
      { title: 'Games', component: GameListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
