import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { LandingFooterMode } from '../../models/ui/landing-footer-mode.enum';


@Component({
  selector: 'app-page-footer-for-landing',
  templateUrl: './page-footer-for-landing.component.html',
  styleUrls: ['./page-footer-for-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFooterForLandingComponent {
  @Input() mode: LandingFooterMode;
}
