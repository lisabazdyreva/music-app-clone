import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreatePlaylistPopupComponent} from '../create-playlist-popup/create-playlist-popup.component';

@Component({
  selector: 'app-create-playlist-header',
  templateUrl: './create-playlist-header.component.html',
  styleUrls: ['./create-playlist-header.component.scss']
})
export class CreatePlaylistHeaderComponent {

  constructor(public dialog: MatDialog) {
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreatePlaylistPopupComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
