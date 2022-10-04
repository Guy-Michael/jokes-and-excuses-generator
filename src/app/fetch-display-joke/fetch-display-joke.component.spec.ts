import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDisplayJokeComponent } from './fetch-display-joke.component';

describe('FetchDisplayJokeComponent', () => {
  let component: FetchDisplayJokeComponent;
  let fixture: ComponentFixture<FetchDisplayJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDisplayJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDisplayJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
