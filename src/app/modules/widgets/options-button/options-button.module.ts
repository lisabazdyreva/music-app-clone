import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsButtonComponent } from './options-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    OptionsButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [OptionsButtonComponent]
})
export class OptionsButtonModule { }
