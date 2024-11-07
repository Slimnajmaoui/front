import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetloginComponent } from './chefdeprojetlogin.component';

describe('ChefdeprojetloginComponent', () => {
  let component: ChefdeprojetloginComponent;
  let fixture: ComponentFixture<ChefdeprojetloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
