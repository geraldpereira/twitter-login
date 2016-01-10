import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteData, ComponentInstruction, OnActivate} from 'angular2/router';
import {Home} from '../home/home';

@Component({
    selector: 'layout',
    template: require('./layout.html')
})
@RouteConfig([
    {path: '/test1', component: Home, name: 'Home'},
    {path: '/test2', component: Home, name: 'Home2'},
])
export class Layout implements OnActivate {
    log:string = '';

    routerOnActivate(next:ComponentInstruction, prev:ComponentInstruction) {
        console.log('hello on activate');
        this.log = `Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}"`;
    }
}
