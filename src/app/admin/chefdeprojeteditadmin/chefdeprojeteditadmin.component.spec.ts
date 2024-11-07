import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditadminComponent } from './chefdeprojeteditadmin.component';

describe('ChefdeprojeteditadminComponent', () => {
  let component: ChefdeprojeteditadminComponent;
  let fixture: ComponentFixture<ChefdeprojeteditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojeteditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
