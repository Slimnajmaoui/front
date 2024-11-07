import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditavprojetComponent } from './chefdeprojeteditavprojet.component';

describe('ChefdeprojeteditavprojetComponent', () => {
  let component: ChefdeprojeteditavprojetComponent;
  let fixture: ComponentFixture<ChefdeprojeteditavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
