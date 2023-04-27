import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PersonalRecommendationModule } from './modules/widgets/personal-recommendation/personal-recommendation.module';
import { SidenavModule } from './modules/widgets/sidenav/sidenav.module';
import { RadioRecommendationModule } from './modules/widgets/radio-recommendation/radio-recommendation.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    PersonalRecommendationModule,
    RadioRecommendationModule,
    SidenavModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
