import {
  Injector,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { BreakpointsObserver } from '../services/breakpoints-observer.service';


export abstract class BaseBpsDirective implements OnInit, OnDestroy {
  //#region Injection

  private breakpointsObserver: BreakpointsObserver;

  //#endregion

  private static comparisonOperators = ['>', '>=', '<', '<='];
  private breakpoints = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
  ];

  private allTimeSubs = new Subscription();

  private passedInited = false;
  private passed: boolean;

  private comparisonOperator: string;
  private breakpoint: string;
  private breakpointIndex: number;

  private _bpsValue: string;

  protected get bpsValue(): string {
    return this._bpsValue;
  }
  protected set bpsValue(value: string) {
    if (!value) {
      this.clearBpsValue();
      return;
    }

    const length = value.length;
    const isLengthValid = length >= 2 && length <= 4;
    if (!isLengthValid) {
      throw new Error('Invalid "bpsValue" value in "BaseBpsDirective" directive.');
    }

    try {
      this._bpsValue = value;
      if (value.length > 2) {
        this.comparisonOperator = value.substr(0, value.length - 2);
        this.throwIfComparisonOperatorInvalid(this.comparisonOperator);
      }
      this.breakpoint = value.substr(value.length - 2, 2);
      this.breakpointIndex = this.computeBreakpointIndexOrThrow(this.breakpoint);
    } catch (e) {
      this.clearBpsValue();
    }
  }

  constructor(
    injector: Injector,
  ) {
    this.breakpointsObserver = injector.get(BreakpointsObserver);

    this.breakpoints = this.breakpointsObserver.breakpointNames;
  }

  protected abstract onPassed(): void;
  protected abstract onNotPassed(): void;

  ngOnInit(): void {
    this.allTimeSubs.add(
      this.breakpointsObserver.asObservable().subscribe(
        breakpoint => {
          if (this.breakpoints.indexOf(breakpoint) >= 0) {
            this.onNewBreakpoint(breakpoint);
          }
        },
      ),
    );
  }

  ngOnDestroy(): void {
    this.allTimeSubs.unsubscribe();
  }

  private onNewBreakpoint(newBreakpoint: string): void {
    let passed: boolean;

    if (!this._bpsValue) {
      passed = false;
    } else if (!this.comparisonOperator) {
      passed = (this.breakpoint === newBreakpoint);
    } else {
      const newBreakpointIndex = this.computeBreakpointIndexOrThrow(newBreakpoint);
      switch (this.comparisonOperator) {
        case '>':
          passed = (newBreakpointIndex > this.breakpointIndex);
          break;

        case '>=':
          passed = (newBreakpointIndex >= this.breakpointIndex);
          break;

        case '<':
          passed = (newBreakpointIndex < this.breakpointIndex);
          break;

        case '<=':
          passed = (newBreakpointIndex <= this.breakpointIndex);
          break;
      }
    }

    if (passed) {
      if (!this.passedInited || !this.passed) {
        this.onPassed();
        this.passed = true;
      }
    } else {
      if (!this.passedInited || this.passed) {
        this.onNotPassed();
        this.passed = false;
      }
    }
  }

  private computeBreakpointIndexOrThrow(breakpoint: string): number {
    const index = this.breakpoints.indexOf(breakpoint);
    if (index < 0) {
      throw new Error('Invalid breakpoint in "BaseBpsDirective" directive.');
    }

    return index;
  }

  private throwIfComparisonOperatorInvalid(comparisonOperator: string): void {
    const index = BaseBpsDirective.comparisonOperators.indexOf(comparisonOperator);
    if (index < 0) {
      throw new Error('Invalid comparison operator in "BaseBpsDirective" directive.');
    }
  }

  private clearBpsValue(): void {
    this._bpsValue = null;
    this.comparisonOperator = null;
    this.breakpoint = null;
    this.breakpointIndex = -1;
  }
}
