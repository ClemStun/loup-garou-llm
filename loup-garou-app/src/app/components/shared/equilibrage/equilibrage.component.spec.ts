import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquilibrageComponent } from './equilibrage.component';

describe('EquilibrageComponent', () => {
  let component: EquilibrageComponent;
  let fixture: ComponentFixture<EquilibrageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquilibrageComponent]
    });
    fixture = TestBed.createComponent(EquilibrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
