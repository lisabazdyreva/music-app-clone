import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteSongsTableComponent } from './favorite-songs-table.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [FavoriteSongsTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [FavoriteSongsTableComponent],
})
export class FavoriteSongsTableModule {}
