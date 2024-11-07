import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditaffgroupeComponent } from './chefdeprojeteditaffgroupe.component';

describe('ChefdeprojeteditaffgroupeComponent', () => {
  let component: ChefdeprojeteditaffgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojeteditaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
