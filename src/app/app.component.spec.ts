import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import {Car} from './cars/car';
import {CarService} from './cars/carservice';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CarService
      ],
    });
  }));

  it('should create the app', async(() => {
    const app = AppComponent;
    expect(app).toBeTruthy();
  }));

});
