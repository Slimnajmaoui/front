import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewprofilComponent } from './chefdeprojetviewprofil.component';

describe('ChefdeprojetviewprofilComponent', () => {
  let component: ChefdeprojetviewprofilComponent;
  let fixture: ComponentFixture<ChefdeprojetviewprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
