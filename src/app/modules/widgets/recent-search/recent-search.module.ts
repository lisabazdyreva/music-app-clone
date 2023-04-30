import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentSearchComponent } from './recent-search.component';
import { RecentSearchCardComponent } from '../../components/recent-search-card/recent-search-card.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [RecentSearchComponent, RecentSearchCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [RecentSearchComponent],
})
export class RecentSearchModule {}
