import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateaffgroupeComponent } from './admincreateaffgroupe.component';

describe('AdmincreateaffgroupeComponent', () => {
  let component: AdmincreateaffgroupeComponent;
  let fixture: ComponentFixture<AdmincreateaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
