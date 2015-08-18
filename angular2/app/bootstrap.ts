/// <reference path="../typings/_custom.d.ts" />

import { bootstrap, bind } from 'angular2/angular2';

import { routerInjectables, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { httpInjectables } from 'angular2/http';

import { App } from './components/app';


var universalInjectables = [
  routerInjectables,
  httpInjectables,
  bind(LocationStrategy).toClass(HashLocationStrategy)
];

bootstrap(App, [universalInjectables]);