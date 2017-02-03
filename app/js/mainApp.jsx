import React from "react";
import TodoModel from "./todoModel";
import TodoApp from "./todoApp";

import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './angular/app.module';

import {CONFIG} from './appConfig';

(function () {
    'use strict';

    var model = new TodoModel('react-todos');

    function render() {
        React.render(
            <TodoApp model={model}/>,
            document.getElementsByClassName('todoapp')[0]
        );
    }

    function bootstrap() {
        render();
        CONFIG.model = model;
        platformBrowserDynamic().bootstrapModule(AppModule);
    }

    model.subscribe(render);
    bootstrap();
})();
