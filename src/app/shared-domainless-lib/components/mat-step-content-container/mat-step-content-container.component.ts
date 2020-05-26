import {
  Component,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  Input,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { MatStep } from '@angular/material';

import { MatStepContentSchema } from '../../models/ui/mat-step-content-schema';
import { MatStepContentComponent } from '../mat-step-content';


@Component({
  selector: 'app-mat-step-content-container',
  templateUrl: './mat-step-content-container.component.html',
  styleUrls: ['./mat-step-content-container.component.scss']
})
export class MatStepContentContainerComponent implements OnDestroy, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  private _contentSchema: MatStepContentSchema;
  get contentSchema(): MatStepContentSchema {
    return this._contentSchema;
  }
  @Input() set contentSchema(value: MatStepContentSchema) {
    this._contentSchema = value;
    this.applyContentSchema();
  }

  private _data: any;
  get data(): any {
    return this._data;
  }
  @Input() set data(value: any) {
    this._data = value;
    this.applyData();
  }

  stepContentComponentRef: ComponentRef<MatStepContentComponent>;

  constructor(
    private matStep: MatStep,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnDestroy(): void {
    this.destroyStepContentComponent();
  }

  ngAfterViewInit(): void {
    this.applyContentSchema();
  }

  getData(): any {
    return this.stepContentComponentRef?.instance.getData();
  }

  private destroyStepContentComponent(): void {
    this.stepContentComponentRef?.destroy();
  }

  private applyContentSchema(): void {
    if (!this.container) {
      return;
    }

    this.destroyStepContentComponent();

    if (!this.contentSchema) {
      this.container.clear();

      this.matStep.label = null;
      this.matStep.stepControl = null;
    } else {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.contentSchema.stepContentComponentClass);
      this.stepContentComponentRef = this.container.createComponent(componentFactory);

      this.matStep.label = this.stepContentComponentRef.instance.title;
      this.matStep.stepControl = this.stepContentComponentRef.instance.stepControl as any;
    }

    this.applyData();
  }

  private applyData(): void {
    if (!this.container) {
      return;
    }

    if (this.stepContentComponentRef) {
      this.stepContentComponentRef.instance.data = this.data;
    }
  }
}
