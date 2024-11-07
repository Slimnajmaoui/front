import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexabsenceComponent } from './chefdeprojetindexabsence.component';

describe('ChefdeprojetindexabsenceComponent', () => {
  let component: ChefdeprojetindexabsenceComponent;
  let fixture: ComponentFixture<ChefdeprojetindexabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
