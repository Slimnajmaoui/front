import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditabsenceComponent } from './usereditabsence.component';

describe('UsereditabsenceComponent', () => {
  let component: UsereditabsenceComponent;
  let fixture: ComponentFixture<UsereditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
