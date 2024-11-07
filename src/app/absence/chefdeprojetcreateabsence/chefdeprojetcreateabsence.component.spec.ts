import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateabsenceComponent } from './chefdeprojetcreateabsence.component';

describe('ChefdeprojetcreateabsenceComponent', () => {
  let component: ChefdeprojetcreateabsenceComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
