import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewabsenceComponent } from './chefdeprojetviewabsence.component';

describe('ChefdeprojetviewabsenceComponent', () => {
  let component: ChefdeprojetviewabsenceComponent;
  let fixture: ComponentFixture<ChefdeprojetviewabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
