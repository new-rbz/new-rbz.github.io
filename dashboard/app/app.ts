import {Component, bind, NgZone, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import {NgFor, Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_DIRECTIVES} from '@angular/forms';

import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

import { MDL } from './common/index';
import { 
    MdToolbar, 
    MD_SIDENAV_DIRECTIVES, 
    MD_GRID_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdIcon,
    MdProgressBar,
    MdIconRegistry } from './common/index';

import {ProfileService} from './components/profile/profile.service';

import { Menu } from './common/components/menu/menu';

declare var Auth0Lock;

@Component({
	selector: 'app-root',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
	directives: [
    Menu,
    MDL,
    ROUTER_DIRECTIVES, 
    MdToolbar, 
    MD_SIDENAV_DIRECTIVES, 
    MdButton, 
    MD_GRID_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdProgressBar,
    FORM_DIRECTIVES,
    NgFor],
  providers: [ProfileService, MdIconRegistry]
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit {
  lock = new Auth0Lock('T1wdQrDposGW5BisaKViC0Cu9CuxtR0c', 'towfeek.eu.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();
  location: Location;
  ngZone: NgZone;
  profile: any;

  isProcessing:boolean;

  public toggleProcessing(){
    this.isProcessing = !this.isProcessing;
  }

    determinateProgressValue: number = 30;
  bufferProgressValue: number = 30;
  bufferBufferValue: number = 40;

  stepDeterminateProgressVal(val: number) {
    this.determinateProgressValue += val;
  }

  stepBufferProgressVal(val: number) {
    this.bufferProgressValue += val;
  }

  stepBufferBufferVal(val: number) {
    this.bufferBufferValue += val;
  }

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  dogs: Object[] = [
    { name: 'Porter', human: 'Kara' },
    { name: 'Mal', human: 'Jeremy' },
    { name: 'Koby', human: 'Igor' },
    { name: 'Razzle', human: 'Ward' },
    { name: 'Molly', human: 'Rob' },
    { name: 'Husi', human: 'Matias' },
  ];

  fixedCols: number = 4;
  fixedRowHeight: number = 100;
  ratioGutter: number = 1;
  fitListHeight: string = '400px';
  ratio: string = '4:1';

  addTileCols() { this.tiles[2].cols++; }

  constructor(location: Location, ngZone: NgZone, private profileService : ProfileService) {
    this.location = location;
    this.ngZone = ngZone;
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

  login() {
    this.lock.show((err: string, profile: string, id_token: string) => {
      if (err) {
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);

      console.log(
        this.jwtHelper.decodeToken(id_token),
        this.jwtHelper.getTokenExpirationDate(id_token),
        this.jwtHelper.isTokenExpired(id_token)
      );

      this.ngZone.run(() => this.loggedIn());
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    this.loggedIn();
  }

  loggedIn() {
    return tokenNotExpired();
  }

  isActive(path) {
    return this.location.path() === path;
  }
}
