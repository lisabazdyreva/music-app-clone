import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaylistHeaderComponent } from './create-playlist-header.component';

describe('CreatePlaylistHeaderComponent', () => {
  let component: CreatePlaylistHeaderComponent;
  let fixture: ComponentFixture<CreatePlaylistHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlaylistHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlaylistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
