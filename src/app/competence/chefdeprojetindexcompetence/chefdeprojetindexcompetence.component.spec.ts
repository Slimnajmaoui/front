import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexcompetenceComponent } from './chefdeprojetindexcompetence.component';

describe('ChefdeprojetindexcompetenceComponent', () => {
  let component: ChefdeprojetindexcompetenceComponent;
  let fixture: ComponentFixture<ChefdeprojetindexcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexcompetenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
