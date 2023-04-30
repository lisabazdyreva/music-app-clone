import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaylistFormComponent } from './create-playlist-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CreatePlaylistFormComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  exports: [CreatePlaylistFormComponent],
})
export class CreatePlaylistFormModule {}
