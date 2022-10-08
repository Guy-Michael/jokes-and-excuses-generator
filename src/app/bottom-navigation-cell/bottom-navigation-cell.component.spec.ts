import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavigationCellComponent } from './bottom-navigation-cell.component';

describe('BottomNavigationCellComponent', () => {
  let component: BottomNavigationCellComponent;
  let fixture: ComponentFixture<BottomNavigationCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavigationCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNavigationCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
