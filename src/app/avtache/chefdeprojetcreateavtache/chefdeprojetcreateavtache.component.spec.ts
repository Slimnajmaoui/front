import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateavtacheComponent } from './chefdeprojetcreateavtache.component';

describe('ChefdeprojetcreateavtacheComponent', () => {
  let component: ChefdeprojetcreateavtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
