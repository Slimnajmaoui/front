import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditchefdeprojetComponent } from './usereditchefdeprojet.component';

describe('UsereditchefdeprojetComponent', () => {
  let component: UsereditchefdeprojetComponent;
  let fixture: ComponentFixture<UsereditchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
