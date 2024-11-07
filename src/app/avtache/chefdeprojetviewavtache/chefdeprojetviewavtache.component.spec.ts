import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewavtacheComponent } from './chefdeprojetviewavtache.component';

describe('ChefdeprojetviewavtacheComponent', () => {
  let component: ChefdeprojetviewavtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetviewavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
