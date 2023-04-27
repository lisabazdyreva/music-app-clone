import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioRecommendationComponent } from './radio-recommendation.component';
import { RadioCardComponent } from '../../components/radio-card/radio-card.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [RadioRecommendationComponent, RadioCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [RadioRecommendationComponent],
})
export class RadioRecommendationModule {}
