import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditchefdeprojetComponent } from './chefdeprojeteditchefdeprojet.component';

describe('ChefdeprojeteditchefdeprojetComponent', () => {
  let component: ChefdeprojeteditchefdeprojetComponent;
  let fixture: ComponentFixture<ChefdeprojeteditchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
