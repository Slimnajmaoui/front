import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexchefdeprojetComponent } from './chefdeprojetindexchefdeprojet.component';

describe('ChefdeprojetindexchefdeprojetComponent', () => {
  let component: ChefdeprojetindexchefdeprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetindexchefdeprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexchefdeprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexchefdeprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
