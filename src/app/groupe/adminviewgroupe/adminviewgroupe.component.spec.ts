import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewgroupeComponent } from './adminviewgroupe.component';

describe('AdminviewgroupeComponent', () => {
  let component: AdminviewgroupeComponent;
  let fixture: ComponentFixture<AdminviewgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
