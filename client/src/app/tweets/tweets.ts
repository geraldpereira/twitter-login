import {Component} from 'angular2/core';
import {NavigationService, Titled} from '../navigation/navigation';
import {RouteData} from 'angular2/router';

@Component({
    selector: 'tweets',
    template: require('./tweets.html'),
    styles: [require('./tweets.scss') ]
})
export class Tweets extends Titled {

    constructor(navigation: NavigationService, data: RouteData) {
        super(navigation, data);
    }
}
