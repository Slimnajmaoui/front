import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditavtacheComponent } from './admineditavtache.component';

describe('AdmineditavtacheComponent', () => {
  let component: AdmineditavtacheComponent;
  let fixture: ComponentFixture<AdmineditavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
