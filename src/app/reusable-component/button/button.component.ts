import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() btnName:string = "";
  @Input() btnClass:string = "";

  @Output() onBtnClicked = new EventEmitter<any>();

  onClick(){
    debugger;
    this.onBtnClicked.emit('admin');
  }
}
