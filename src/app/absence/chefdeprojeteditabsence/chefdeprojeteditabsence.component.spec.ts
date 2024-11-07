import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditabsenceComponent } from './chefdeprojeteditabsence.component';

describe('ChefdeprojeteditabsenceComponent', () => {
  let component: ChefdeprojeteditabsenceComponent;
  let fixture: ComponentFixture<ChefdeprojeteditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
