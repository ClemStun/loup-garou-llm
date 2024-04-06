import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsMaxJourComponent } from './temps-max-jour.component';

describe('TempsMaxJourComponent', () => {
  let component: TempsMaxJourComponent;
  let fixture: ComponentFixture<TempsMaxJourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempsMaxJourComponent]
    });
    fixture = TestBed.createComponent(TempsMaxJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
