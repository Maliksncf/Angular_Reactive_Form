import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachMovieComponent } from './search-movie.component';

describe('SerachMovieComponent', () => {
  let component: SerachMovieComponent;
  let fixture: ComponentFixture<SerachMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerachMovieComponent]
    });
    fixture = TestBed.createComponent(SerachMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
