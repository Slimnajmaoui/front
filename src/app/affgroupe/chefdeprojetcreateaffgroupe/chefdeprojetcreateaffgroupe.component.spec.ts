import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateaffgroupeComponent } from './chefdeprojetcreateaffgroupe.component';

describe('ChefdeprojetcreateaffgroupeComponent', () => {
  let component: ChefdeprojetcreateaffgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetcreateaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
