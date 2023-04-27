import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioRecommendationComponent } from './radio-recommendation.component';

describe('RadioRecommendationComponent', () => {
  let component: RadioRecommendationComponent;
  let fixture: ComponentFixture<RadioRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
