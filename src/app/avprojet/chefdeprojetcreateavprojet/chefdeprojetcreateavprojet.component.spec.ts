import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateavprojetComponent } from './chefdeprojetcreateavprojet.component';

describe('ChefdeprojetcreateavprojetComponent', () => {
  let component: ChefdeprojetcreateavprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
