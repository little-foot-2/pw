import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { LandingHeaderMode } from '../../models/ui/landing-header-mode.enum';
import { LandingFooterMode } from '../../models/ui/landing-footer-mode.enum';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  LandingHeaderMode = LandingHeaderMode;
  LandingFooterMode = LandingFooterMode;

  @Input() headerMode: LandingHeaderMode;
  @Input() footerMode: LandingFooterMode;
}
