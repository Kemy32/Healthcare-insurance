import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseEditProfileComponent } from './nurse-edit-profile.component';

describe('NurseEditProfileComponent', () => {
  let component: NurseEditProfileComponent;
  let fixture: ComponentFixture<NurseEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
