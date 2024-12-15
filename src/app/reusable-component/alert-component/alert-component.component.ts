import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponentComponent {
  @Input() alertType:string = ""; // property decorator
  @Input()  message:string="";
}
