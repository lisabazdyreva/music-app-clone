import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreatePlaylistPopupModule} from '../../modules/widgets/create-playlist-popup/create-playlist-popup.module';
import {CreatePlaylistHeaderModule} from '../../modules/widgets/create-playlist-header/create-playlist-header.module';
import {OptionsButtonModule} from '../../modules/widgets/options-button/options-button.module';

import {CreatePlaylistPageComponent} from './create-playlist-page.component';



@NgModule({
  declarations: [CreatePlaylistPageComponent],
  imports: [
    CreatePlaylistPopupModule,
    CreatePlaylistHeaderModule,
    OptionsButtonModule,
    CommonModule
  ],
  exports: [CreatePlaylistPageComponent]
})
export class CreatePlaylistPageModule { }
