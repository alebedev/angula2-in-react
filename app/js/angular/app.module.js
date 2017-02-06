'use strict';
/*
 * Copyright (c) New Cloud Technologies, Ltd., 2013-2016
 * 
 * You can not use the contents of the file in any way without New Cloud Technologies, Ltd. written permission.
 * To obtain such a permit, you should contact New Cloud Technologies, Ltd. at http://ncloudtech.com/contact.html
 *
 */

import 'zone.js';
import * as _ from 'lodash';

import { Component, Injectable, Inject, NgModule, NgZone } from '@angular/core';
import { TOKEN, CONFIG } from '../appConfig';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';

// Copy class to create duplicate component
class AppComponent2 extends AppComponent {}
AppComponent2.annotations = _.clone(AppComponent.annotations);
AppComponent2.annotations[1] = new Component({
    selector: 'my-app2',
    template: AppComponent.annotations[1].template
});

AppComponent2.parameters = _.clone(AppComponent.parameters)

class AppModule {
    constructor() {
        this.title = 'app title';
    }
}
;
AppModule.annotations = [
    new NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, AppComponent2],
        bootstrap: [AppComponent, AppComponent2],
        providers: [{provide: TOKEN, useValue: CONFIG}]
    })
];

module.exports = {AppModule};