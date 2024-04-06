import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuAnnonceComponent } from './jeu-annonce.component';

describe('JeuAnnonceComponent', () => {
  let component: JeuAnnonceComponent;
  let fixture: ComponentFixture<JeuAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeuAnnonceComponent]
    });
    fixture = TestBed.createComponent(JeuAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
