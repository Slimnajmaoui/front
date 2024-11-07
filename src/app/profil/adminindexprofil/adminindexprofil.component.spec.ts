import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexprofilComponent } from './adminindexprofil.component';

describe('AdminindexprofilComponent', () => {
  let component: AdminindexprofilComponent;
  let fixture: ComponentFixture<AdminindexprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
