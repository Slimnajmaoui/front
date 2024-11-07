import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditavprojetComponent } from './usereditavprojet.component';

describe('UsereditavprojetComponent', () => {
  let component: UsereditavprojetComponent;
  let fixture: ComponentFixture<UsereditavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
