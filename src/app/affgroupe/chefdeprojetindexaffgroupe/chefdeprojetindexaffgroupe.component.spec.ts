import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexaffgroupeComponent } from './chefdeprojetindexaffgroupe.component';

describe('ChefdeprojetindexaffgroupeComponent', () => {
  let component: ChefdeprojetindexaffgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetindexaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdeprojetindexaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
