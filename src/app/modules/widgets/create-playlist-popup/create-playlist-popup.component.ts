import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-playlist-popup',
  templateUrl: './create-playlist-popup.component.html',
  styleUrls: ['./create-playlist-popup.component.scss']
})
export class CreatePlaylistPopupComponent {
  constructor(public dialogRef: MatDialogRef<CreatePlaylistPopupComponent>) {
  }
  value = 'Clear me';
}
