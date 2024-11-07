import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetedituserComponent } from './chefdeprojetedituser.component';

describe('ChefdeprojetedituserComponent', () => {
  let component: ChefdeprojetedituserComponent;
  let fixture: ComponentFixture<ChefdeprojetedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetedituserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
