import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewaffgroupeComponent } from './chefdeprojetviewaffgroupe.component';

describe('ChefdeprojetviewaffgroupeComponent', () => {
  let component: ChefdeprojetviewaffgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetviewaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetviewaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
