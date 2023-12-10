import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllDocsComponent } from './admin-view-all-docs.component';

describe('AdminViewAllDocsComponent', () => {
  let component: AdminViewAllDocsComponent;
  let fixture: ComponentFixture<AdminViewAllDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAllDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
