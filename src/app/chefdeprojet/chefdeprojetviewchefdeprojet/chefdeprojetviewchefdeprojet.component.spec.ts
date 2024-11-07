import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewchefdeprojetComponent } from './chefdeprojetviewchefdeprojet.component';

describe('ChefdeprojetviewchefdeprojetComponent', () => {
  let component: ChefdeprojetviewchefdeprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetviewchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
