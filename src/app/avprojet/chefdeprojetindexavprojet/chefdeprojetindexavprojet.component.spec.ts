import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexavprojetComponent } from './chefdeprojetindexavprojet.component';

describe('ChefdeprojetindexavprojetComponent', () => {
  let component: ChefdeprojetindexavprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetindexavprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexavprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexavprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
