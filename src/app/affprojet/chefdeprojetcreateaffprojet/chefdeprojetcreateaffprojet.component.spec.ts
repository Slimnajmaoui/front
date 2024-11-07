import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateaffprojetComponent } from './chefdeprojetcreateaffprojet.component';

describe('ChefdeprojetcreateaffprojetComponent', () => {
  let component: ChefdeprojetcreateaffprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
