import {OnInit, Component, OnDestroy, AfterContentInit} from '@angular/core'
import {ROUTER_DIRECTIVES} from '@angular/router';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import { MDL } from '../../index';
import { 
    MdToolbar, 
    MD_SIDENAV_DIRECTIVES, 
    MD_GRID_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdIcon,
    MdProgressBar,
    MdIconRegistry } from '../../index';

import {ProfileService} from '../../../components/profile/profile.service';
declare var Auth0Lock;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
	directives: [
    MDL,
    ROUTER_DIRECTIVES, 
    MdToolbar, 
    MD_SIDENAV_DIRECTIVES, 
    MdButton, 
    MD_GRID_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdProgressBar],
  providers: [ProfileService, MdIconRegistry]
})
export class Menu implements OnInit, OnDestroy, AfterContentInit {
  profile: any;

  constructor(){

  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  ngOnDestroy() : void {
    console.log('ngOnDestroy() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
}