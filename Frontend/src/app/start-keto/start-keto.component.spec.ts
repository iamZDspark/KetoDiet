import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartKetoComponent } from './start-keto.component';

describe('StartKetoComponent', () => {
  let component: StartKetoComponent;
  let fixture: ComponentFixture<StartKetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartKetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartKetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
