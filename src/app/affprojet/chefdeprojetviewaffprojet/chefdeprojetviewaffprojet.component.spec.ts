import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewaffprojetComponent } from './chefdeprojetviewaffprojet.component';

describe('ChefdeprojetviewaffprojetComponent', () => {
  let component: ChefdeprojetviewaffprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetviewaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
