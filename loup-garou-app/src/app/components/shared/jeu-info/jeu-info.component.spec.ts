import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuInfoComponent } from './jeu-info.component';

describe('JeuInfoComponent', () => {
  let component: JeuInfoComponent;
  let fixture: ComponentFixture<JeuInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuInfoComponent]
    });
    fixture = TestBed.createComponent(JeuInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
