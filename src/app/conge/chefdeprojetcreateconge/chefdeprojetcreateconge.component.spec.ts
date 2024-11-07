import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreatecongeComponent } from './chefdeprojetcreateconge.component';

describe('ChefdeprojetcreatecongeComponent', () => {
  let component: ChefdeprojetcreatecongeComponent;
  let fixture: ComponentFixture<ChefdeprojetcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreatecongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
