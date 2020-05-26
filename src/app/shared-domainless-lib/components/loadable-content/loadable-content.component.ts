import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';


@Component({
  selector: 'app-loadable-content',
  templateUrl: './loadable-content.component.html',
  styleUrls: ['./loadable-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadableContentComponent {
  @Input() loading: boolean;
}
