import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsFormComponent } from './sweets-form.component';

describe('SweetsFormComponent', () => {
  let component: SweetsFormComponent;
  let fixture: ComponentFixture<SweetsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
