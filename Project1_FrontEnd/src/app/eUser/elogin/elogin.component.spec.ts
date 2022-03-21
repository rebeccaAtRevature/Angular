import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloginComponent } from './elogin.component';

describe('EloginComponent', () => {
  let component: EloginComponent;
  let fixture: ComponentFixture<EloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EloginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as role 'EMPLOYEE'`, () => {
    const fixture = TestBed.createComponent(EloginComponent);
    const app = fixture.componentInstance;
    expect(component.role).toEqual('EMPLOYEE');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EloginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-header')?.textContent).toContain('EMPLOYEE LOGIN');
  });

});
