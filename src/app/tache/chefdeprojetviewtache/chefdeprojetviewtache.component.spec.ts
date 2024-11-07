import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewtacheComponent } from './chefdeprojetviewtache.component';

describe('ChefdeprojetviewtacheComponent', () => {
  let component: ChefdeprojetviewtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetviewtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
