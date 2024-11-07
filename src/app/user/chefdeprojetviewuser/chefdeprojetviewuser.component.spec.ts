import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewuserComponent } from './chefdeprojetviewuser.component';

describe('ChefdeprojetviewuserComponent', () => {
  let component: ChefdeprojetviewuserComponent;
  let fixture: ComponentFixture<ChefdeprojetviewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
