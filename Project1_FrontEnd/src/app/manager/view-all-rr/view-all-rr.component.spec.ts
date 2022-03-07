import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRRComponent } from './view-all-rr.component';

describe('ViewAllRRComponent', () => {
  let component: ViewAllRRComponent;
  let fixture: ComponentFixture<ViewAllRRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllRRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
