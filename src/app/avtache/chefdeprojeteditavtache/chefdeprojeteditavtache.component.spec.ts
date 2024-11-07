import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditavtacheComponent } from './chefdeprojeteditavtache.component';

describe('ChefdeprojeteditavtacheComponent', () => {
  let component: ChefdeprojeteditavtacheComponent;
  let fixture: ComponentFixture<ChefdeprojeteditavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
