import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditaffprojetComponent } from './usereditaffprojet.component';

describe('UsereditaffprojetComponent', () => {
  let component: UsereditaffprojetComponent;
  let fixture: ComponentFixture<UsereditaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
