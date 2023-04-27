import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRecommendationComponent } from './personal-recommendation.component';

describe('PersonalRecommendationComponent', () => {
  let component: PersonalRecommendationComponent;
  let fixture: ComponentFixture<PersonalRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
