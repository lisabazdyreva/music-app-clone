import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentSearchComponent } from './recent-search.component';
import { RecentSearchCardComponent } from '../../components/recent-search-card/recent-search-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RecentSearchComponent, RecentSearchCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [RecentSearchComponent],
})
export class RecentSearchModule {}
