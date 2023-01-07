import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent {
  faClose = faClose;
  visible: boolean = true;
  animation: boolean = false;

  public getAnimation = () => {
    return this.animation ? { startAnimation: true } : { endAnimation: true };
  };

  public onClickVisible = () => {
    this.animation = true;
    setTimeout(() => {
      this.visible = false;
    }, 500);
  };
}
