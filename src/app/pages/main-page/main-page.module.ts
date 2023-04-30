import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { PersonalRecommendationModule } from '../../modules/widgets/personal-recommendation/personal-recommendation.module';
import { RadioRecommendationModule } from '../../modules/widgets/radio-recommendation/radio-recommendation.module';
import { DayRecommendationModule } from '../../modules/widgets/day-recommendation/day-recommendation.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    PersonalRecommendationModule,
    RadioRecommendationModule,
    DayRecommendationModule,
  ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
