import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSignUpComponent } from './nurse-sign-up.component';

describe('NurseSignUpComponent', () => {
  let component: NurseSignUpComponent;
  let fixture: ComponentFixture<NurseSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
