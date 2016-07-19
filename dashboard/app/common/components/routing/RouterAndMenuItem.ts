import { Type } from '@angular/core';
import { Route } from '@angular/router';

export interface RouterAndMenuItem extends Route {
	name:string;	
	link:string;
	icon:string;		
	isDisabled?:boolean;
  path: string;
  component: Type | string;
}
