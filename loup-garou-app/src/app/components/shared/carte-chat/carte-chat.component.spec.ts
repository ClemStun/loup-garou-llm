import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteChatComponent } from './carte-chat.component';

describe('CarteChatComponent', () => {
  let component: CarteChatComponent;
  let fixture: ComponentFixture<CarteChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteChatComponent]
    });
    fixture = TestBed.createComponent(CarteChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
