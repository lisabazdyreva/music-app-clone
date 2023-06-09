import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SidenavModule } from './modules/widgets/sidenav/sidenav.module';
import { PlayerPanelModule } from './modules/widgets/player-panel/player-panel.module';
import { SearchFormModule } from './modules/widgets/search-form/search-form.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { CreatePlaylistPageComponent } from './pages/create-playlist-page/create-playlist-page.component';
import { RecentSearchModule } from './modules/widgets/recent-search/recent-search.module';
import { GenreSearchModule } from './modules/widgets/genre-search/genre-search.module';
import { CreatePlaylistPopupModule } from './modules/widgets/create-playlist-popup/create-playlist-popup.module';
import { FavoriteSongsTableModule } from './modules/widgets/favorite-songs-table/favorite-songs-table.module';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainPageModule } from './pages/main-page/main-page.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CreatePlaylistPageModule} from './pages/create-playlist-page/create-playlist-page.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    CollectionPageComponent,
    FavoritePageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    PlayerPanelModule,
    SidenavModule,
    SearchFormModule,
    RecentSearchModule,
    GenreSearchModule,
    FavoriteSongsTableModule,
    MainPageModule,
    CreatePlaylistPageModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'collection', component: CollectionPageComponent },
      { path: 'playlist/newID', component: CreatePlaylistPageComponent },
      { path: 'collection/favorite', component: FavoritePageComponent },
      { path: 'login', component: LoginPageComponent },
    ]),
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
