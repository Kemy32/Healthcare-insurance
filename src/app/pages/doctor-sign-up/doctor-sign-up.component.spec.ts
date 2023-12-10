import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSignUpOneComponent } from './doctor-sign-up-one.component';

describe('DoctorSignUpOneComponent', () => {
  let component: DoctorSignUpOneComponent;
  let fixture: ComponentFixture<DoctorSignUpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSignUpOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSignUpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
