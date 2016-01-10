import {Component, View} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {Layout} from './layout/layout';
import {RouteConfig} from 'angular2/router';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers: [...FORM_PROVIDERS],
    directives: [Layout],
    pipes: [],
    styles: [
        require('../assets/css/index.scss')
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Layout, name: 'Index', data: {title: 'Index page'}},
    {path: '/test1', component: Layout, name: 'Test1', data: {title: 'Test page 1'}},
    {path: '/test2', component: Layout, name: 'Test2', data: {title: 'Test page 2'}},
    {path: '/**', redirectTo: ['Index']}
])
export class App {
}
