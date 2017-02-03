'use strict';
/*
 * Copyright (c) New Cloud Technologies, Ltd., 2013-2016
 * 
 * You can not use the contents of the file in any way without New Cloud Technologies, Ltd. written permission.
 * To obtain such a permit, you should contact New Cloud Technologies, Ltd. at http://ncloudtech.com/contact.html
 *
 */

import { Component, Injectable, Inject, NgZone } from '@angular/core';
import { TOKEN } from '../appConfig';

export class AppComponent {
    constructor(config, NgZone, name = 'Angular') {
        Object.assign(this, {NgZone, config, name});
    }

    ngOnInit() {
        console.log('oi', this.config.model);
        this.config.model.subscribe(() => this.NgZone.run(() => {
            console.log('model changed');
        }))
    }
}
AppComponent.annotations = [
    new Injectable(),
    new Component({
        selector: 'my-app',
        template: `<h4>Hello {{name}}</h4><p>TODOs model: {{config.model.todos | json}}</p>`
    })
];
AppComponent.parameters = [
    [new Inject(TOKEN)],
    [new Inject(NgZone)]
];

