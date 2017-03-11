import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
	selector: 'page-list',
	templateUrl: 'sports-list.html'
})
export class SportsList {
	contentEle: any;
	textEle: any;

	constructor(private navParams: NavParams) {
	}

	ngOnInit() {
		if (this.navParams.data) {
		}
	}
}