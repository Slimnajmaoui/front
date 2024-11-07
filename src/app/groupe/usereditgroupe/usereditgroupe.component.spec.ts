import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditgroupeComponent } from './usereditgroupe.component';

describe('UsereditgroupeComponent', () => {
  let component: UsereditgroupeComponent;
  let fixture: ComponentFixture<UsereditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
