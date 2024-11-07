import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditgroupeComponent } from './chefdeprojeteditgroupe.component';

describe('ChefdeprojeteditgroupeComponent', () => {
  let component: ChefdeprojeteditgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojeteditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
