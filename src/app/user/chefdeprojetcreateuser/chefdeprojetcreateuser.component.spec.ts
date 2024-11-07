import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateuserComponent } from './chefdeprojetcreateuser.component';

describe('ChefdeprojetcreateuserComponent', () => {
  let component: ChefdeprojetcreateuserComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
