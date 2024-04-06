import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePopupComponent } from './role-popup.component';

describe('RolePopupComponent', () => {
  let component: RolePopupComponent;
  let fixture: ComponentFixture<RolePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolePopupComponent]
    });
    fixture = TestBed.createComponent(RolePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
