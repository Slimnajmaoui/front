import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewavprojetComponent } from './chefdeprojetviewavprojet.component';

describe('ChefdeprojetviewavprojetComponent', () => {
  let component: ChefdeprojetviewavprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetviewavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
