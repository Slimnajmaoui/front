import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewgroupeComponent } from './chefdeprojetviewgroupe.component';

describe('ChefdeprojetviewgroupeComponent', () => {
  let component: ChefdeprojetviewgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetviewgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
