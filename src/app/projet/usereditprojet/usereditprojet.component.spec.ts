import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditprojetComponent } from './usereditprojet.component';

describe('UsereditprojetComponent', () => {
  let component: UsereditprojetComponent;
  let fixture: ComponentFixture<UsereditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
