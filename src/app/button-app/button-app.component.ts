import { Component, Input,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'button-app',
  templateUrl: './button-app.component.html',
  styleUrls: ['./button-app.component.scss']
})
export class ButtonAppComponent {
@Input() name: string = "Default Name";
  @Output() dataEvent= new EventEmitter<string>();

  sendData() {
    this.dataEvent.emit(this.name);
  }
}
