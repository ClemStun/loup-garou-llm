import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulleAvatarComponent } from './bulle-avatar.component';

describe('BulleAvatarComponent', () => {
  let component: BulleAvatarComponent;
  let fixture: ComponentFixture<BulleAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulleAvatarComponent]
    });
    fixture = TestBed.createComponent(BulleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
