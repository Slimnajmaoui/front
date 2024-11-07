import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewafftacheComponent } from './chefdeprojetviewafftache.component';

describe('ChefdeprojetviewafftacheComponent', () => {
  let component: ChefdeprojetviewafftacheComponent;
  let fixture: ComponentFixture<ChefdeprojetviewafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
