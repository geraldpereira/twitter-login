import {Component} from 'angular2/core';
import {NavigationService, Titled} from '../navigation/navigation';
import {RouteData} from 'angular2/router';

@Component({
    selector: 'login',
    template: require('./login.html')
})
export class Login extends Titled {

    constructor(navigation: NavigationService, data: RouteData) {
        super(navigation, data);
    }
}
