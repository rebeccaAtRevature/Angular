import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHttpAnimalComponent } from './list-http-animal.component';

describe('ListHttpAnimalComponent', () => {
  let component: ListHttpAnimalComponent;
  let fixture: ComponentFixture<ListHttpAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHttpAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHttpAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
