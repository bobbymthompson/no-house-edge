import { Component, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../../services/auth/authentication.service'
import { UserService } from '../../services/user.service'
import { Proposal } from '../../models/proposal'
import { SelectableUser } from '../../models/selectable.user'
import { Config } from '../../services/config.service'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
	selector: 'page-item-details',
	templateUrl: 'game-details.html'
})
export class GameDetailsPage {
	proposal: Proposal;
	selectableUsers: Array<SelectableUser>;

	constructor(public http: Http,
		public navCtrl: NavController,
		public navParams: NavParams,
		public userService: UserService,
		public authenticationService: AuthenticationService,
		private config: Config) {

		let game = navParams.get('game');

		this.proposal = new Proposal();
		this.proposal.game = game;
		this.selectableUsers = new Array<SelectableUser>();

		this.userService.getUsers().then(users => {

			console.log('Users: %s', JSON.stringify(users));

			users.forEach((user) => {
				console.log('User %s', user.firstname);
				this.selectableUsers.push(new SelectableUser(user));
			});

		});
	}

	propose(proposal: Proposal) {

		proposal.proposedBy = this.authenticationService.User;

		this.selectableUsers.forEach(selectable => {

			if (selectable.selected) {
				console.log('Proposing bet for %s', JSON.stringify(selectable.user));

				proposal.proposedTo = selectable.user;

				let newProp = {
					game: proposal.game,
					proposedTo: proposal.proposedTo.id,
					proposedBy: proposal.proposedBy.id,
					units: proposal.units,
					proposedByPick: proposal.proposedByPick
				}

				console.log('Proposing pick: ' + JSON.stringify(newProp));

				this.http.post(this.config.get('endPoint') + '/proposals', newProp).map(res => res.json()).subscribe(data => {

				});
			}
		});

		this.navCtrl.pop();
	}
}
