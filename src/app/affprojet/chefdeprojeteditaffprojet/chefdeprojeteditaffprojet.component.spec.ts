import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditaffprojetComponent } from './chefdeprojeteditaffprojet.component';

describe('ChefdeprojeteditaffprojetComponent', () => {
  let component: ChefdeprojeteditaffprojetComponent;
  let fixture: ComponentFixture<ChefdeprojeteditaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
