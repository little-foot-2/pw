import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { LandingHeaderMode } from '../../models/ui/landing-header-mode.enum';
import { LandingTheme } from '../../services/landing-theme.service';
import { AppUrls } from '../../../shared-lib/services/app-urls.service';


@Component({
  selector: 'app-page-header-for-landing',
  templateUrl: './page-header-for-landing.component.html',
  styleUrls: ['./page-header-for-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderForLandingComponent {
  LandingHeaderMode = LandingHeaderMode;

  @Input() mode: LandingHeaderMode;

  constructor(
    public landingTheme: LandingTheme,
    public appUrls: AppUrls,
  ) {}
}
