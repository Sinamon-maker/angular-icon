import { Component } from '@angular/core';
import {
  faCoffee,
  faHand,
  faHamsa,
  faHandDots,
  faStar,
  faDownload,
  faUser,
  faBaby,
  IconDefinition,
  IconName,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-iconshow',
  templateUrl: './iconshow.component.html',
  styleUrls: ['./iconshow.component.scss'],
})
export class IconshowComponent {
  timeoutIds: ReturnType<typeof setTimeout>[] = [];
  icons: IconName[] = [
    'film',
    'user',
    'download',
    'star',
    'hamsa',
    'hand',
    'coffee',
    'check',
    'phone',
    'filter',
    'umbrella',
    'lock',
    'headphones',
    'book',
    'video',
    'eye',
  ];
  currentIcon: IconName = 'coffee';

  ngOnDestroy(): void {
    this.clearTimeouts();
  }
  addIcon() {
    this.timeoutIds.push(
      setTimeout(() => {
        this.generateIcon();
      }, 3000)
    );
  }
  generateIcon() {
    const random = Math.round(Math.random() * (this.icons.length - 1));
    this.currentIcon = this.icons[random];
  }
  clearTimeouts() {
    this.timeoutIds.forEach((id) => clearTimeout(id));
  }
}
