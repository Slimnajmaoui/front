import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditprofilComponent } from './chefdeprojeteditprofil.component';

describe('ChefdeprojeteditprofilComponent', () => {
  let component: ChefdeprojeteditprofilComponent;
  let fixture: ComponentFixture<ChefdeprojeteditprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
