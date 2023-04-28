import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerPanelComponent } from './player-panel.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [PlayerPanelComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatSliderModule,
  ],
  exports: [PlayerPanelComponent],
})
export class PlayerPanelModule {}
