import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKetoComponent } from './about-keto.component';

describe('AboutKetoComponent', () => {
  let component: AboutKetoComponent;
  let fixture: ComponentFixture<AboutKetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutKetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
