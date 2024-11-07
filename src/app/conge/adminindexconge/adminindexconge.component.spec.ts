import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexcongeComponent } from './adminindexconge.component';

describe('AdminindexcongeComponent', () => {
  let component: AdminindexcongeComponent;
  let fixture: ComponentFixture<AdminindexcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
