import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexprofilComponent } from './chefdeprojetindexprofil.component';

describe('ChefdeprojetindexprofilComponent', () => {
  let component: ChefdeprojetindexprofilComponent;
  let fixture: ComponentFixture<ChefdeprojetindexprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
