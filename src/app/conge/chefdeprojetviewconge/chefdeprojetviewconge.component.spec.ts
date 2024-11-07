import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewcongeComponent } from './chefdeprojetviewconge.component';

describe('ChefdeprojetviewcongeComponent', () => {
  let component: ChefdeprojetviewcongeComponent;
  let fixture: ComponentFixture<ChefdeprojetviewcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
