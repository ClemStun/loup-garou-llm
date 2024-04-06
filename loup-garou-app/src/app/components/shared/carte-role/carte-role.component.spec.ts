import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRoleComponent } from './carte-role.component';

describe('CarteRoleComponent', () => {
  let component: CarteRoleComponent;
  let fixture: ComponentFixture<CarteRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteRoleComponent]
    });
    fixture = TestBed.createComponent(CarteRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
