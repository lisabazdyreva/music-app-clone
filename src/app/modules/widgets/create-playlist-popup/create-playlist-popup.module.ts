import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaylistPopupComponent } from './create-playlist-popup.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CreatePlaylistPopupComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule ],
  exports: [CreatePlaylistPopupComponent],
})
export class CreatePlaylistPopupModule {}
