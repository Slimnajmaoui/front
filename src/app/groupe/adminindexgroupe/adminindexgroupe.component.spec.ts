import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexgroupeComponent } from './adminindexgroupe.component';

describe('AdminindexgroupeComponent', () => {
  let component: AdminindexgroupeComponent;
  let fixture: ComponentFixture<AdminindexgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
