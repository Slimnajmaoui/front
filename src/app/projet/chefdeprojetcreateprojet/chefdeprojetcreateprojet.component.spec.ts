import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateprojetComponent } from './chefdeprojetcreateprojet.component';

describe('ChefdeprojetcreateprojetComponent', () => {
  let component: ChefdeprojetcreateprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
