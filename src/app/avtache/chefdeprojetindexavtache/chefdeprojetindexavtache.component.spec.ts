import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexavtacheComponent } from './chefdeprojetindexavtache.component';

describe('ChefdeprojetindexavtacheComponent', () => {
  let component: ChefdeprojetindexavtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetindexavtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexavtacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexavtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
