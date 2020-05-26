import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BreakpointsObserver,
  BreakpointsObserverConfigToken,
  BreakpointsObserverConfig,
  Breakpoint,
  DefaultBreakpointsObserverConfig,
} from './services/breakpoints-observer.service';
import { BpsIfDirective } from './directives/bps-if.directive';
import { BpsShowDirective } from './directives/bps-show.directive';
import { BpsHideDirective } from './directives/bps-hide.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BpsIfDirective,
    BpsShowDirective,
    BpsHideDirective,
  ],
  exports: [
    BpsIfDirective,
    BpsShowDirective,
    BpsHideDirective,
  ],
  providers: [
    BreakpointsObserver,
  ],
})
export class NgBreakpointsModule {
  static forRoot(config: BreakpointsObserverConfig = null): ModuleWithProviders {
    return {
      ngModule: NgBreakpointsModule,
      providers: [
        {
          provide: BreakpointsObserverConfigToken,
          useValue: config ? config : DefaultBreakpointsObserverConfig,
        },
      ],
    };
  }
}
