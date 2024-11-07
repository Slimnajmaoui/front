import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreatetacheComponent } from './chefdeprojetcreatetache.component';

describe('ChefdeprojetcreatetacheComponent', () => {
  let component: ChefdeprojetcreatetacheComponent;
  let fixture: ComponentFixture<ChefdeprojetcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreatetacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
