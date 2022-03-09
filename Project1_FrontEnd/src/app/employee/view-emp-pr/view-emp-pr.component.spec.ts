import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpPrComponent } from './view-emp-pr.component';

describe('ViewEmpPrComponent', () => {
  let component: ViewEmpPrComponent;
  let fixture: ComponentFixture<ViewEmpPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
