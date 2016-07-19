/// <reference path="../typings/browser/ambient/es6-shim/index.d.ts" />
import {bootstrap} from '@angular/platform-browser-dynamic';
import {bind, provide} from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from './components/appRoot/app';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {APP_ROUTER_PROVIDER} from './common/components/routing/routes';
import {HTTP_PROVIDERS, Http, JSONP_PROVIDERS} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthGuard} from './common/security/auth-guard';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  JSONP_PROVIDERS,
  HTTP_PROVIDERS,
	APP_ROUTER_PROVIDER,
	bind(LocationStrategy).toClass(HashLocationStrategy),
  provide(AuthConfig, { useFactory: () => {
    return new AuthConfig();
  }}),
  AuthHttp,
  AuthGuard
]);
