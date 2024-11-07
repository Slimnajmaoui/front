import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreategroupeComponent } from './chefdeprojetcreategroupe.component';

describe('ChefdeprojetcreategroupeComponent', () => {
  let component: ChefdeprojetcreategroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreategroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
