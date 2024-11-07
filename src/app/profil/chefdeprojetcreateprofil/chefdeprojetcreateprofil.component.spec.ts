import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateprofilComponent } from './chefdeprojetcreateprofil.component';

describe('ChefdeprojetcreateprofilComponent', () => {
  let component: ChefdeprojetcreateprofilComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateprofilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
