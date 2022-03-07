import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPRComponent } from './view-all-pr.component';

describe('ViewAllPRComponent', () => {
  let component: ViewAllPRComponent;
  let fixture: ComponentFixture<ViewAllPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
