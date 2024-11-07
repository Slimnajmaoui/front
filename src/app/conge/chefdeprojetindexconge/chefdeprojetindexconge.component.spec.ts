import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexcongeComponent } from './chefdeprojetindexconge.component';

describe('ChefdeprojetindexcongeComponent', () => {
  let component: ChefdeprojetindexcongeComponent;
  let fixture: ComponentFixture<ChefdeprojetindexcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexcongeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
