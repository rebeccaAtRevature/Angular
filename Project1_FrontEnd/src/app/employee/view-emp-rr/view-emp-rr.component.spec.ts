import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpRrComponent } from './view-emp-rr.component';

describe('ViewEmpRrComponent', () => {
  let component: ViewEmpRrComponent;
  let fixture: ComponentFixture<ViewEmpRrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpRrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpRrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
