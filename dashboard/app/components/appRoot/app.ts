import {Component, bind, NgZone, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import {NgFor, Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {FORM_DIRECTIVES} from '@angular/forms';

import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

import { APP_ROUTER_PROVIDER} from '../../common/components/routing/routes';

import { MDL } from '../../common/index';
import { 
    MdToolbar, 
    MD_SIDENAV_DIRECTIVES, 
    MD_GRID_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdIcon,
    MdProgressBar,
    MdIconRegistry, 
    MD_LIST_DIRECTIVES,
    AppRouteProvider,
    RouterAndMenuItem } from '../../common/index';

import { ProfileService } from '../profile/profile.service';

declare var Auth0Lock;

@Component({
	selector: 'app-root',
  templateUrl: './app/components/appRoot/app.html',
  styleUrls: ['./app/components/appRoot/app.css'],
	directives: [
    MDL,
    ROUTER_DIRECTIVES, 
    MdToolbar, 
    MD_SIDENAV_DIRECTIVES, 
    MdButton, 
    MD_GRID_LIST_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdProgressBar,
    FORM_DIRECTIVES,
    NgFor],
  providers: [ProfileService, MdIconRegistry, AppRouteProvider]
})
export class AppComponent implements OnInit, OnDestroy, AfterContentInit {
  lock = new Auth0Lock('T1wdQrDposGW5BisaKViC0Cu9CuxtR0c', 'towfeek.eu.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();
  links: RouterAndMenuItem[];
  location: Location;
  ngZone: NgZone;
  profile: any;
  isProcessing:boolean;
  alerts: any[] = [
    {name: '9:00AM: MSFT Vol. 200%, Price Down 14%', link: '#', description:'Panic and run!'},
    {name: '9:02AM: UVXY Vol. 650%, Price Up 38%', link: '#', description:'Panic and run!'},
    {name: '9:03AM: VIX Vol. -, Price Up 40%', link: '#', description:'Panic and run!'},
    {name: '9:04AM: UWTI Vol. 600%, Price Up 34%', link: '#', description:'Panic and run!'}
  ];

  constructor(location: Location, ngZone: NgZone, private profileService : ProfileService, private appRoutesProvider:AppRouteProvider) {
    this.location = location;
    this.ngZone = ngZone;
    this.links = appRoutesProvider.getAppRoutes();
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

  public toggleProcessing(){
    this.isProcessing = !this.isProcessing;
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
