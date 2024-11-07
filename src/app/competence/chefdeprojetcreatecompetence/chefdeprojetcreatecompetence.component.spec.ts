import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreatecompetenceComponent } from './chefdeprojetcreatecompetence.component';

describe('ChefdeprojetcreatecompetenceComponent', () => {
  let component: ChefdeprojetcreatecompetenceComponent;
  let fixture: ComponentFixture<ChefdeprojetcreatecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreatecompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreatecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
