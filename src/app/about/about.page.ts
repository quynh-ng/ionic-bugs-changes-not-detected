import { Component, ViewChild } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';

@Component({
	selector: 'app-about',
	templateUrl: 'about.page.html',
	styleUrls: ['about.page.scss']
})

export class AboutPage {

	constructor (
	) {
		this.addItems();
	}

	total = 0;
	items = new Array<{ title: string, index: number }>();
	@ViewChild(InfiniteScroll) scrollCtrl: InfiniteScroll;

	track(index: number, item: any) {
		return index;
	}

	addItems() {
		for (let index = this.total; index < this.total + 20; index++) {
			this.items.push({
				title: `Item @ ${index}`,
				index: index
			});
		}
		this.total += 20;
	}

	onScroll() {
		window.setTimeout(() => {
			this.addItems();
			this.scrollCtrl.complete();
		}, 567);
	}

}
