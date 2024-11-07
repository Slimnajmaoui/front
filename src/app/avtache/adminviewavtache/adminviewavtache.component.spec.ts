import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewavtacheComponent } from './adminviewavtache.component';

describe('AdminviewavtacheComponent', () => {
  let component: AdminviewavtacheComponent;
  let fixture: ComponentFixture<AdminviewavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
