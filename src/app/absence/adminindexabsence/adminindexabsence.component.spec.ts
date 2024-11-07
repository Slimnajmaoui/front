import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexabsenceComponent } from './adminindexabsence.component';

describe('AdminindexabsenceComponent', () => {
  let component: AdminindexabsenceComponent;
  let fixture: ComponentFixture<AdminindexabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
