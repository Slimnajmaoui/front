import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexaffgroupeComponent } from './adminindexaffgroupe.component';

describe('AdminindexaffgroupeComponent', () => {
  let component: AdminindexaffgroupeComponent;
  let fixture: ComponentFixture<AdminindexaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
