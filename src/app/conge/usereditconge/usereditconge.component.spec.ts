import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditcongeComponent } from './usereditconge.component';

describe('UsereditcongeComponent', () => {
  let component: UsereditcongeComponent;
  let fixture: ComponentFixture<UsereditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
