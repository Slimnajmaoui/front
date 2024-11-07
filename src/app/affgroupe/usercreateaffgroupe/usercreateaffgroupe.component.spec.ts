import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateaffgroupeComponent } from './usercreateaffgroupe.component';

describe('UsercreateaffgroupeComponent', () => {
  let component: UsercreateaffgroupeComponent;
  let fixture: ComponentFixture<UsercreateaffgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercreateaffgroupeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercreateaffgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
