import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GameDetailsPage } from '../game-details/game-details';
import { SportsList } from '../sports-list/sports-list';
import { FacebookLoginComponent } from '../facebook-login/facebook-login';
import { Game } from '../../models/game'
import { Config } from '../../services/config.service'

@Component({
  selector: 'page-list',
  templateUrl: 'games.html'
})
export class GameListPage {
  games: Array<Game>;

  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private config: Config) {

    var date = new Date();
    var formattedToday = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
    
    this.http.get(this.config.get('endPoint') + '/games?date=' + formattedToday).map(res => res.json()).subscribe(games => {
        this.games = games;
    });
  }

  itemTapped(event, game) {
    this.navCtrl.push(GameDetailsPage, {
      game: game
    });
  }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(SportsList, {
    });
    
    popover.present({
      ev: ev
    });
  }
}