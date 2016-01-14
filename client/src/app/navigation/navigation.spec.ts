import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {Tweets} from './tweets';

describe('Tweets', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Tweets,
    BaseRequestOptions
  ]);

  it('should have a title', inject([ Home ], (home) => {
    expect(home.title.value).toEqual('Angular 2');
  }));

  it('should have a http', inject([ Home ], (home) => {
    expect(!!home.http).toEqual(true);
  }));

  it('should log ngOnInit', inject([ Home ], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
