import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexavtacheComponent } from './adminindexavtache.component';

describe('AdminindexavtacheComponent', () => {
  let component: AdminindexavtacheComponent;
  let fixture: ComponentFixture<AdminindexavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminindexavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
