import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllAppsComponent } from './admin-view-all-apps.component';

describe('AdminViewAllAppsComponent', () => {
  let component: AdminViewAllAppsComponent;
  let fixture: ComponentFixture<AdminViewAllAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAllAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
