/// <reference path="../../typings/_custom.d.ts" />

import { Component, View, coreDirectives } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

import { Search } from '../components/search/search';
import { Artist } from '../components/artist/artist';

@Component({
	selector: 'app'
})
@View({
	directives: [coreDirectives, RouterLink, RouterOutlet, Search],
	template: `
		<header>
			<nav>
				<ul>
					<li>
						<a [router-link]="['/search']">Search</a>
					</li>	
				</ul>
			</nav>
		</header>
		
		<main>
			<h1>{{title}}</h1>
			<router-outlet></router-outlet>
		</main>
	`
})
@RouteConfig([
  { path: '/',                  redirectTo: '/search' },
  { path: '/search',            as: 'search',     component: Search },
  { path: '/artist/:id',        as: 'artist',     component: Artist }
])

export class App {
	title: string;
	constructor() {
		this.title = 'App title';
	}
}