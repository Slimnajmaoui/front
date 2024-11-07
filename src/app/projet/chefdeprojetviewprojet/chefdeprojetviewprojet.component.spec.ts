import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewprojetComponent } from './chefdeprojetviewprojet.component';

describe('ChefdeprojetviewprojetComponent', () => {
  let component: ChefdeprojetviewprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetviewprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
