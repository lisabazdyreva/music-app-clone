import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRecommendationComponent } from './personal-recommendation.component';
import { PersonalRecommendationCardComponent } from '../../components/personal-recommendation-card/personal-recommendation-card.component';

import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    PersonalRecommendationComponent,
    PersonalRecommendationCardComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [PersonalRecommendationComponent],
})
export class PersonalRecommendationModule {}
