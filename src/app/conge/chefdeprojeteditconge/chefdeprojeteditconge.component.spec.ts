import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditcongeComponent } from './chefdeprojeteditconge.component';

describe('ChefdeprojeteditcongeComponent', () => {
  let component: ChefdeprojeteditcongeComponent;
  let fixture: ComponentFixture<ChefdeprojeteditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
