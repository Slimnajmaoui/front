import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewaffgroupeComponent } from './adminviewaffgroupe.component';

describe('AdminviewaffgroupeComponent', () => {
  let component: AdminviewaffgroupeComponent;
  let fixture: ComponentFixture<AdminviewaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
