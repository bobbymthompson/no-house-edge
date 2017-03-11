import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Bet } from '../../models/bet'
import { Proposal } from '../../models/proposal'
import { Game } from '../../models/game'
import { Config } from '../../services/config.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from '../../services/auth/authentication.service'

@Component({
  selector: 'page-proposal',
  templateUrl: 'proposal.html'
})
export class ProposalPage {
  public proposal: Proposal;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public authenticationService: AuthenticationService, private config: Config) {

    this.proposal = new Proposal();

    console.log('NavParams: %s, ', JSON.stringify(navParams.data));

    this.getProposal().then((prop) => {

      console.log('Proposal %s', JSON.stringify(prop));

      prop.maxUnits = prop.units;

      if (prop.proposedByPick === 'Favorite') {
        prop.line = prop.game.line
        prop.pick = prop.game.favorite
      } else if (prop.proposedByPick === 'Underdog') {
        prop.line = prop.game.underdogLine
        prop.pick = prop.game.underdog
      } else if (prop.proposedByPick === 'Over') {
        prop.pick = 'Over'
        prop.line = prop.game.overUnder
      } else if (prop.proposedByPick === 'Under') {
        prop.pick = 'Under'
        prop.line = prop.game.overUnder
      }

      this.proposal = prop;
    })
  }

  getProposal(): Promise<Proposal> {
    return this.http.get(this.config.get('endPoint') + '/proposals/' + this.navParams.get('proposalId'))
      .map(response => new Proposal().deserialize(response.json()))
      .toPromise();
  }

  postBet(bet): Promise<Bet> {
    console.log('Creating bet: %s', JSON.stringify(bet));
    return this.http.post(this.config.get('endPoint') + '/bets', bet)
      .map(response => new Bet().deserialize(response.json()))
      .toPromise();
  }

  accept(proposal: Proposal) {

    let bet = new Bet();
    bet.game = proposal.game;
    bet.acceptor = this.authenticationService.User;
    bet.proposer = proposal.proposedBy;
    bet.proposerPick = proposal.proposedByPick;
    bet.units = proposal.units;

    this.postBet(bet);

    this.navCtrl.popToRoot();
  }
}
