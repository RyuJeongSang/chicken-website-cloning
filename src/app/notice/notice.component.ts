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

  public onClickVisible = () => {
    this.visible = false;
  };
}
