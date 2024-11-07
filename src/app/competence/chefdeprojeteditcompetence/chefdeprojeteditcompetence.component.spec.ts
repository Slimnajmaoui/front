import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditcompetenceComponent } from './chefdeprojeteditcompetence.component';

describe('ChefdeprojeteditcompetenceComponent', () => {
  let component: ChefdeprojeteditcompetenceComponent;
  let fixture: ComponentFixture<ChefdeprojeteditcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
