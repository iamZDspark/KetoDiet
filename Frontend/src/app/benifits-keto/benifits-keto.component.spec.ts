import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifitsKetoComponent } from './benifits-keto.component';

describe('BenifitsKetoComponent', () => {
  let component: BenifitsKetoComponent;
  let fixture: ComponentFixture<BenifitsKetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenifitsKetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenifitsKetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
