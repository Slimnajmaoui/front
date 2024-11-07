import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreatechefdeprojetComponent } from './chefdeprojetcreatechefdeprojet.component';

describe('ChefdeprojetcreatechefdeprojetComponent', () => {
  let component: ChefdeprojetcreatechefdeprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetcreatechefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreatechefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreatechefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
