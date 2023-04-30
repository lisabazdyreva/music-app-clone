import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayRecommendationComponent } from './day-recommendation.component';
import { DayRecommendationCardComponent } from '../../components/day-recommendation-card/day-recommendation-card.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DayRecommendationComponent, DayRecommendationCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [DayRecommendationComponent],
})
export class DayRecommendationModule {}
