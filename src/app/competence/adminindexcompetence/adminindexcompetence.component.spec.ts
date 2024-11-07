import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexcompetenceComponent } from './adminindexcompetence.component';

describe('AdminindexcompetenceComponent', () => {
  let component: AdminindexcompetenceComponent;
  let fixture: ComponentFixture<AdminindexcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
