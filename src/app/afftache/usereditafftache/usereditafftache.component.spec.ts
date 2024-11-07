import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditafftacheComponent } from './usereditafftache.component';

describe('UsereditafftacheComponent', () => {
  let component: UsereditafftacheComponent;
  let fixture: ComponentFixture<UsereditafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
