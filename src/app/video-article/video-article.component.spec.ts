import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoArticleComponent } from './video-article.component';

describe('VideoArticleComponent', () => {
  let component: VideoArticleComponent;
  let fixture: ComponentFixture<VideoArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
