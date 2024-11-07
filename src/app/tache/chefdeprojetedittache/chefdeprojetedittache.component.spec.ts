import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetedittacheComponent } from './chefdeprojetedittache.component';

describe('ChefdeprojetedittacheComponent', () => {
  let component: ChefdeprojetedittacheComponent;
  let fixture: ComponentFixture<ChefdeprojetedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetedittacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
