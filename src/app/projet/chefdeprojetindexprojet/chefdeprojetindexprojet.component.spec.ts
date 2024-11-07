import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexprojetComponent } from './chefdeprojetindexprojet.component';

describe('ChefdeprojetindexprojetComponent', () => {
  let component: ChefdeprojetindexprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetindexprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
