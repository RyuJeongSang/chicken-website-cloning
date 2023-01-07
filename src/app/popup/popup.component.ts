import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(private cookieService: CookieService) {
    if (this.cookieService.get('popup-cookie') === 'true') {
      this.isVisible = false;
    }
  }
  faClose = faClose;

  isVisible: boolean = true;
  isChecked: boolean = false;

  checkboxValue = (event: any) => {
    this.isChecked = event.checked;
  };

  onClick = () => {
    if (this.isChecked) {
      this.cookieService.set('popup-cookie', 'true', { expires: 1 });
    }
    this.isVisible = false;
  };
}
