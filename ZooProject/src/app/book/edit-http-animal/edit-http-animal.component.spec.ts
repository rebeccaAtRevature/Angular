import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHttpAnimalComponent } from './edit-http-animal.component';

describe('EditHttpAnimalComponent', () => {
  let component: EditHttpAnimalComponent;
  let fixture: ComponentFixture<EditHttpAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHttpAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHttpAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
