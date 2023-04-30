import { Component } from '@angular/core';
export interface PeriodicElement {
  title: string;
  index: number;
  album: string;
  date_added: string;
  is_favorite: boolean;
  duration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    index: 1,
    title: 'Hydrogen',
    album: 'some',
    date_added: 'H',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 2,
    title: 'Helium',
    album: 'some',
    date_added: 'He',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 3,
    title: 'Lithium',
    album: 'some',
    date_added: 'Li',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 4,
    title: 'Beryllium',
    album: 'some',
    date_added: 'Be',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 5,
    title: 'Boron',
    album: 'some',
    date_added: 'B',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 6,
    title: 'Carbon',
    album: 'some',
    date_added: 'C',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 7,
    title: 'Nitrogen',
    album: 'some',
    date_added: 'N',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 8,
    title: 'Oxygen',
    album: 'some',
    date_added: 'O',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 9,
    title: 'Fluorine',
    album: 'some',
    date_added: 'F',
    is_favorite: true,
    duration: '2:05',
  },
  {
    index: 10,
    title: 'Neon',
    album: 'some',
    date_added: 'Ne',
    is_favorite: true,
    duration: '2:05',
  },
];

@Component({
  selector: 'app-favorite-songs-table',
  templateUrl: './favorite-songs-table.component.html',
  styleUrls: ['./favorite-songs-table.component.scss'],
})
export class FavoriteSongsTableComponent {
  displayedColumns: string[] = [
    'index',
    'title',
    'album',
    'date_added',
    'is_favorite',
    'duration',
  ];
  dataSource = ELEMENT_DATA;
}
