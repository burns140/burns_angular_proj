import { Component } from '@angular/core';
import { INavbarItem } from './INavbarItem';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	protected sections: INavbarItem[] = [
		{
			title: "Projects",
			link: "/projects"
		},
		{
			title: "About Me",
			link: "https://linkedin.com",
		}
	];

	constructor() { }
}
