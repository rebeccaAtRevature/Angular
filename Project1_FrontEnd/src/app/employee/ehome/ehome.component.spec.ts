import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhomeComponent } from './ehome.component';

describe('EhomeComponent', () => {
  let component: EhomeComponent;
  let fixture: ComponentFixture<EhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EhomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as role 'Employee'`, () => {
    const fixture = TestBed.createComponent(EhomeComponent);
    const app = fixture.componentInstance;
    expect(app.role).toEqual('Employee');
  });

  it('should render role', () => {
    const fixture = TestBed.createComponent(EhomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('sidebar h3')?.textContent).toContain('Employee Operations');
  });

});
