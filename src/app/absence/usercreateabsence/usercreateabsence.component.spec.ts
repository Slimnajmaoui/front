import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateabsenceComponent } from './usercreateabsence.component';

describe('UsercreateabsenceComponent', () => {
  let component: UsercreateabsenceComponent;
  let fixture: ComponentFixture<UsercreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateabsenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
