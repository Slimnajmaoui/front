import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditprojetComponent } from './chefdeprojeteditprojet.component';

describe('ChefdeprojeteditprojetComponent', () => {
  let component: ChefdeprojeteditprojetComponent;
  let fixture: ComponentFixture<ChefdeprojeteditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
