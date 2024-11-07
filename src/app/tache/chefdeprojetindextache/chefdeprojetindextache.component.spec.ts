import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindextacheComponent } from './chefdeprojetindextache.component';

describe('ChefdeprojetindextacheComponent', () => {
  let component: ChefdeprojetindextacheComponent;
  let fixture: ComponentFixture<ChefdeprojetindextacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindextacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindextacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
