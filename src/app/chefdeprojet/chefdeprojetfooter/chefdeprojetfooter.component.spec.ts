import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetfooterComponent } from './chefdeprojetfooter.component';

describe('ChefdeprojetfooterComponent', () => {
  let component: ChefdeprojetfooterComponent;
  let fixture: ComponentFixture<ChefdeprojetfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
