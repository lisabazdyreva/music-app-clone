import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-recommendation-card',
  templateUrl: './day-recommendation-card.component.html',
  styleUrls: ['./day-recommendation-card.component.scss'],
})
export class DayRecommendationCardComponent {
  @Input() playlistTitle = 'hyperpop';
}
