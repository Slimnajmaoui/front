import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditaffgroupeComponent } from './usereditaffgroupe.component';

describe('UsereditaffgroupeComponent', () => {
  let component: UsereditaffgroupeComponent;
  let fixture: ComponentFixture<UsereditaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
