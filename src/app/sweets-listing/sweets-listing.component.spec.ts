import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsListingComponent } from './sweets-listing.component';

describe('SweetsListingComponent', () => {
  let component: SweetsListingComponent;
  let fixture: ComponentFixture<SweetsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
