import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'my-hero-detail',
	moduleId: module.id,
	templateUrl: 'hero-detail.component.html',
	styleUrls: [ 'hero-detail.component.css' ],
})
export class HeroDetailComponent implements OnInit {
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	hero: Hero;

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) =>
		this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}
}
