import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegRequestsComponent } from './admin-reg-requests.component';

describe('AdminRegRequestsComponent', () => {
  let component: AdminRegRequestsComponent;
  let fixture: ComponentFixture<AdminRegRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
