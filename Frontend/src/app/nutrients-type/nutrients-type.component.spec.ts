import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientsTypeComponent } from './nutrients-type.component';

describe('NutrientsTypeComponent', () => {
  let component: NutrientsTypeComponent;
  let fixture: ComponentFixture<NutrientsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientsTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
