import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditavtacheComponent } from './usereditavtache.component';

describe('UsereditavtacheComponent', () => {
  let component: UsereditavtacheComponent;
  let fixture: ComponentFixture<UsereditavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
