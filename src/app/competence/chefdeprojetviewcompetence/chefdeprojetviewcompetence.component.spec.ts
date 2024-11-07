import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewcompetenceComponent } from './chefdeprojetviewcompetence.component';

describe('ChefdeprojetviewcompetenceComponent', () => {
  let component: ChefdeprojetviewcompetenceComponent;
  let fixture: ComponentFixture<ChefdeprojetviewcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
