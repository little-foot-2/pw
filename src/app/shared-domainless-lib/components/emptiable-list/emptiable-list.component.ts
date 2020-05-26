import {
  Component,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';


@Component({
  selector: 'app-emptiable-list',
  templateUrl: './emptiable-list.component.html',
  styleUrls: ['./emptiable-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptiableListComponent {
  @Input() list: any[];
  @Input() emptyListText: string;
}
