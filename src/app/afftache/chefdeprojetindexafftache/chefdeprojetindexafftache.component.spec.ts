import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexafftacheComponent } from './chefdeprojetindexafftache.component';

describe('ChefdeprojetindexafftacheComponent', () => {
  let component: ChefdeprojetindexafftacheComponent;
  let fixture: ComponentFixture<ChefdeprojetindexafftacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexafftacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexafftacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
