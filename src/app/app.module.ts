import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PersonalRecommendationModule } from './modules/widgets/personal-recommendation/personal-recommendation.module';
import { SidenavModule } from './modules/widgets/sidenav/sidenav.module';
import { RadioRecommendationModule } from './modules/widgets/radio-recommendation/radio-recommendation.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { CreatePlaylistPageComponent } from './pages/create-playlist-page/create-playlist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchPageComponent,
    CollectionPageComponent,
    FavoritePageComponent,
    CreatePlaylistPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    PersonalRecommendationModule,
    RadioRecommendationModule,
    SidenavModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'collection', component: CollectionPageComponent },
      { path: 'playlist/newID', component: CreatePlaylistPageComponent },
      { path: 'collection/favorite', component: FavoritePageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
