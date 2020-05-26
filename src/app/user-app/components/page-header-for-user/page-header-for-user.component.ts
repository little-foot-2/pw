import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { UserTheme } from '../../services/user-theme.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';
import { UserHeaderMode } from '../../models/ui/user-header-mode.enum';


@Component({
  selector: 'app-page-header-for-user',
  templateUrl: './page-header-for-user.component.html',
  styleUrls: ['./page-header-for-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderForUserComponent {
  @Input() mode: UserHeaderMode;

  constructor(
    public userTheme: UserTheme,
    public appUrls: AppUrls,
  ) {}
}
