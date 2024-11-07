import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditadminComponent } from './usereditadmin.component';

describe('UsereditadminComponent', () => {
  let component: UsereditadminComponent;
  let fixture: ComponentFixture<UsereditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
