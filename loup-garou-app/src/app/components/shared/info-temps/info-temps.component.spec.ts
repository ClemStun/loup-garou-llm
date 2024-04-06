import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTempsComponent } from './info-temps.component';

describe('InfoTempsComponent', () => {
  let component: InfoTempsComponent;
  let fixture: ComponentFixture<InfoTempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTempsComponent]
    });
    fixture = TestBed.createComponent(InfoTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
