import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditafftacheComponent } from './chefdeprojeteditafftache.component';

describe('ChefdeprojeteditafftacheComponent', () => {
  let component: ChefdeprojeteditafftacheComponent;
  let fixture: ComponentFixture<ChefdeprojeteditafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
