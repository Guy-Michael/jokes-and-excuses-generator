import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGagComponent } from './display-gag.component';

describe('DisplayGagComponent', () => {
  let component: DisplayGagComponent;
  let fixture: ComponentFixture<DisplayGagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
