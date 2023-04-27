import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecommendationCardComponent } from './personal-recommendation-card.component';

describe('PersonalRecommendationCardComponent', () => {
  let component: PersonalRecommendationCardComponent;
  let fixture: ComponentFixture<PersonalRecommendationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRecommendationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRecommendationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
