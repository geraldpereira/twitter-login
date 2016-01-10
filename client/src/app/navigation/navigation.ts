import {Injectable} from 'angular2/core';
import {RouteData} from 'angular2/router';

@Injectable()
export class NavigationService {
  public currentTitle: string = 'test';
}

export class Titled {
  constructor(private navigation: NavigationService, data: RouteData) {
    navigation.currentTitle = data.get('title');
  }
}
