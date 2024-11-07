import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditcompetenceComponent } from './usereditcompetence.component';

describe('UsereditcompetenceComponent', () => {
  let component: UsereditcompetenceComponent;
  let fixture: ComponentFixture<UsereditcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
