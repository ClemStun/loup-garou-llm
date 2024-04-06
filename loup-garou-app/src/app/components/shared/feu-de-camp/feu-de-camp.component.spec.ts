import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuDeCampComponent } from './feu-de-camp.component';

describe('FeuDeCampComponent', () => {
  let component: FeuDeCampComponent;
  let fixture: ComponentFixture<FeuDeCampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeuDeCampComponent]
    });
    fixture = TestBed.createComponent(FeuDeCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
