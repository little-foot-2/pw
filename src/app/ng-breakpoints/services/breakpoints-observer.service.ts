import {
  Injectable,
  InjectionToken,
  Inject,
} from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  fromEvent,
  combineLatest,
} from 'rxjs';
import {
  map,
  debounceTime,
  defaultIfEmpty,
  startWith,
  distinctUntilChanged,
} from 'rxjs/operators';


export const BreakpointsObserverConfigToken = new InjectionToken<BreakpointsObserverConfig>('BreakpointsObserverConfig');


export interface Breakpoint {
  name: string;
  max: number;
}


export interface BreakpointsObserverConfig {
  breakpoints: Breakpoint[],
  debounceTime: number,
}


export const DefaultBreakpointsObserverConfig: BreakpointsObserverConfig = {
  breakpoints: [
    { name: 'xs', max: 575 },
    { name: 'sm', max: 767 },
    { name: 'md', max: 991 },
    { name: 'lg', max: 1199 },
    { name: 'xl', max: null },
  ],
  debounceTime: 0,
};


@Injectable({
  providedIn: 'root'
})
export class BreakpointsObserver {
  readonly breakpointNames: string[];

  private forceRefresh$ = new BehaviorSubject<void>(null);
  private breakpoint$: Observable<string>;

  constructor(
    @Inject(BreakpointsObserverConfigToken) private config: BreakpointsObserverConfig,
  ) {
    // Normalize config

    Object.assign(this.config, DefaultBreakpointsObserverConfig);
    Object.assign(this.config, this.config || {});

    // Normalize breakpoints

    const breakpointsWithMax =  this.config.breakpoints
      .filter(item => typeof item === 'number')
      .sort(this.compareBreakpoints.bind(this));

    const breakpointsWithoutMax = this.config.breakpoints
      .filter(item => typeof item !== 'number');

    this.config.breakpoints = [
      ...breakpointsWithMax,
      ...breakpointsWithoutMax,
    ];

    // Compute breakpoint names

    this.breakpointNames = this.config.breakpoints.map(item => item.name);

    // Handle window resize event

    const resize$ = combineLatest(
      fromEvent(window, 'resize').pipe(
        debounceTime(this.config.debounceTime),
        defaultIfEmpty(),
        startWith(this.getWindowWidth()),
      ),
      this.forceRefresh$,
    ).pipe(
      debounceTime(this.config.debounceTime),
    );

    this.breakpoint$ = resize$.pipe(
      map(this.getBreakpoint.bind(this)),
      distinctUntilChanged<string>(),
    );
  }

  asObservable(): Observable<string> {
    return this.breakpoint$;
  }

  forceRefresh(): void {
    this.forceRefresh$.next(null);
  }

  private getBreakpoint(): string {
    let breakpointName: string = null;

    const breackpointList = this.config.breakpoints;
    if (breackpointList) {
      const width = this.getWindowWidth();

      for (const curBreakpoint of breackpointList) {
        if (typeof curBreakpoint.max !== 'number' || width <= curBreakpoint.max) {
          breakpointName = curBreakpoint.name;
          break;
        }
      }
    }

    return breakpointName;
  }

  private getWindowWidth(): number {
    return window.innerWidth;
  }

  private compareBreakpoints(a: Breakpoint, b: Breakpoint): number {
    let result: number;

    if (a.max < b.max) {
      result = -1;
    } else if (a.max > b.max) {
      result = 1;
    } else {
      result = 0;
    }

    return result;
  }
}
