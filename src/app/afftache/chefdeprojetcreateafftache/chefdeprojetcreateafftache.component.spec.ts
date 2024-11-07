import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateafftacheComponent } from './chefdeprojetcreateafftache.component';

describe('ChefdeprojetcreateafftacheComponent', () => {
  let component: ChefdeprojetcreateafftacheComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
