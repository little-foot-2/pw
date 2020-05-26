import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { UserHeaderMode } from '../../models/ui/user-header-mode.enum';
import { UserFooterMode } from '../../models/ui/user-footer-mode.enum';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';


interface Tab {
  label: string;
  link: string;
}


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent {
  UserHeaderMode = UserHeaderMode;
  UserFooterMode = UserFooterMode;

  @Input() headerMode: UserHeaderMode;
  @Input() footerMode: UserFooterMode;

  tabs: Tab[];

  constructor(
    private appUrls: AppUrls,
  ) {
    this.initTabs();
  }

  private initTabs(): void {
    this.tabs = [
      {
        label: 'Main',
        link: this.appUrls.user.main,
      },
      {
        label: 'Transfers',
        link: this.appUrls.user.transfers,
      },
    ];
  }
}
