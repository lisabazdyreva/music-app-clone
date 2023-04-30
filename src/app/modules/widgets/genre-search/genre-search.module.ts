import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreSearchComponent } from './genre-search.component';
import { GenreCardComponent } from '../../components/genre-card/genre-card.component';

@NgModule({
  declarations: [GenreSearchComponent, GenreCardComponent],
  imports: [CommonModule],
  exports: [GenreSearchComponent],
})
export class GenreSearchModule {}
