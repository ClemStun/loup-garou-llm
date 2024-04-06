import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulleChatComponent } from './bulle-chat.component';

describe('BulleChatComponent', () => {
  let component: BulleChatComponent;
  let fixture: ComponentFixture<BulleChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulleChatComponent]
    });
    fixture = TestBed.createComponent(BulleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
