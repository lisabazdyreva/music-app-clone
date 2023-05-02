import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaylistHeaderComponent } from './create-playlist-header.component';



@NgModule({
  declarations: [
    CreatePlaylistHeaderComponent
  ],
  exports: [
    CreatePlaylistHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreatePlaylistHeaderModule { }
