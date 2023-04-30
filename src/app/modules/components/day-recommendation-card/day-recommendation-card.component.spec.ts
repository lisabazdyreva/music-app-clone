import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRecommendationCardComponent } from './day-recommendation-card.component';

describe('DayRecommendationCardComponent', () => {
  let component: DayRecommendationCardComponent;
  let fixture: ComponentFixture<DayRecommendationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayRecommendationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayRecommendationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
