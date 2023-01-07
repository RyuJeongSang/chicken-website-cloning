import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CookieService } from 'ngx-cookie-service';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoticeComponent } from './notice/notice.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopupComponent } from './popup/popup.component';
import { MainSwiperComponent } from './main-swiper/main-swiper.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { VideoArticleComponent } from './video-article/video-article.component';
import { NewsBoxComponent } from './news-box/news-box.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { SnsBoxComponent } from './sns-box/sns-box.component';
import { CompetiContainerComponent } from './competi-container/competi-container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticeComponent,
    PopupComponent,
    MainSwiperComponent,
    MainNavbarComponent,
    SecondSectionComponent,
    VideoArticleComponent,
    NewsBoxComponent,
    NewsContainerComponent,
    SnsBoxComponent,
    CompetiContainerComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, MatCheckboxModule, SwiperModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
