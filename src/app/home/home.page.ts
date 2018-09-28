import { Component, NgZone } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})

export class HomePage {

	constructor (
		public zone: NgZone,
		public navController: NavController,
		public actionsheetController: ActionSheetController
	) {
	}

	showActionSheet() {
		this.actionsheetController.create({
			buttons: [
				{
					text: 'Indirect navigate - by NgZone.run()',
					handler: () => this.zone.run(() => {
						this.navController.navigateForward('/items', true);
					})
				},
				{
					text: 'Direct Navigate - without NgZone.run()',
					handler: () => {
						this.navController.navigateForward('/items', true);
					}
				}
			]
		}).then(async actionsheet => await actionsheet.present());
	}

}
