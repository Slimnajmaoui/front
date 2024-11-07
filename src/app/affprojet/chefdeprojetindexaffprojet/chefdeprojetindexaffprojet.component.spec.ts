import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexaffprojetComponent } from './chefdeprojetindexaffprojet.component';

describe('ChefdeprojetindexaffprojetComponent', () => {
  let component: ChefdeprojetindexaffprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetindexaffprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexaffprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexaffprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
