import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSongsTableComponent } from './favorite-songs-table.component';

describe('FavoriteSongsTableComponent', () => {
  let component: FavoriteSongsTableComponent;
  let fixture: ComponentFixture<FavoriteSongsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteSongsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteSongsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
