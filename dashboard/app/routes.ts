import { provideRouter, RouterConfig } from '@angular/router';
import { AuthGuard} from './auth-guard';

import {About, Profile, TestComponent, Todo} from './components/index';

export const appRoutes: RouterConfig = [
	{ path: '', component: Todo },
	{ path: 'about/:id', component: About },
  { path: 'profile', component: Profile, canActivate:[AuthGuard]},
	{ path: 'test', component : TestComponent }
];

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);
