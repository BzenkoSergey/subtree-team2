import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Team2Component } from './root.component';

const routes: Routes = [
	{
		path: '',
		component: Team2Component
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class Team2RoutingModule {}
