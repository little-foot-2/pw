import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatStepper } from '@angular/material';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

import { MatStepContentSchema } from '../../models/ui/mat-step-content-schema';
import { MatStepContentContainerComponent } from '../mat-step-content-container/mat-step-content-container.component';


@Component({
  selector: 'app-mat-horizontal-stepper',
  templateUrl: './mat-horizontal-stepper.component.html',
  styleUrls: ['./mat-horizontal-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatHorizontalStepperComponent {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChildren('stepContentContainers') stepContentContainers: QueryList<MatStepContentContainerComponent>;

  @Output() dataChanged = new EventEmitter<any>();
  @Output() doneWithData = new EventEmitter<any>();

  @Input() steps: MatStepContentSchema[];
  @Input() data: any;
  @Input() doneInProcess: boolean;

  isLinear = true;

  onStepChange(event: StepperSelectionEvent): void {
    this.data = this.stepContentContainers.toArray()[event.previouslySelectedIndex].getData();
    this.dataChanged.emit(this.data);
  }

  setSelectedIndex(selectedIndex: number): void {
    this.stepper.selectedIndex = selectedIndex;
  }

  next(): void {
    this.stepper.next();
  }

  previous(): void {
    this.stepper.previous();
  }
}
