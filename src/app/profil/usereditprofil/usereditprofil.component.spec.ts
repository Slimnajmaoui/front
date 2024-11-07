import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditprofilComponent } from './usereditprofil.component';

describe('UsereditprofilComponent', () => {
  let component: UsereditprofilComponent;
  let fixture: ComponentFixture<UsereditprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
