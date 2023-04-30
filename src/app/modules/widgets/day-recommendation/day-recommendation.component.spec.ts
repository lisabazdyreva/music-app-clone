import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRecommendationComponent } from './day-recommendation.component';

describe('MorningRecommendationComponent', () => {
  let component: DayRecommendationComponent;
  let fixture: ComponentFixture<DayRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayRecommendationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DayRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
