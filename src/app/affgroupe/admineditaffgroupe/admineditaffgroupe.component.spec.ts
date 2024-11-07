import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditaffgroupeComponent } from './admineditaffgroupe.component';

describe('AdmineditaffgroupeComponent', () => {
  let component: AdmineditaffgroupeComponent;
  let fixture: ComponentFixture<AdmineditaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
