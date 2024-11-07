import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexgroupeComponent } from './chefdeprojetindexgroupe.component';

describe('ChefdeprojetindexgroupeComponent', () => {
  let component: ChefdeprojetindexgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetindexgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
