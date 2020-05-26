import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { UserFooterMode } from '../../models/ui/user-footer-mode.enum';


@Component({
  selector: 'app-page-footer-for-user',
  templateUrl: './page-footer-for-user.component.html',
  styleUrls: ['./page-footer-for-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFooterForUserComponent {
  @Input() mode: UserFooterMode;
}
