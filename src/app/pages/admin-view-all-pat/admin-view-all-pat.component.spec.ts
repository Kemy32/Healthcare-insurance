import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllPatComponent } from './admin-view-all-pat.component';

describe('AdminViewAllPatComponent', () => {
  let component: AdminViewAllPatComponent;
  let fixture: ComponentFixture<AdminViewAllPatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAllPatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllPatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
