import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllNursesComponent } from './admin-view-all-nurses.component';

describe('AdminViewAllNursesComponent', () => {
  let component: AdminViewAllNursesComponent;
  let fixture: ComponentFixture<AdminViewAllNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAllNursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
