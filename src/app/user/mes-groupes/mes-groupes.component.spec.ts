import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesGroupesComponent } from './mes-groupes.component';

describe('MesGroupesComponent', () => {
  let component: MesGroupesComponent;
  let fixture: ComponentFixture<MesGroupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesGroupesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
