import { Component,Input, Output,EventEmitter,} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'input-app',
  templateUrl: './input-app.component.html',
  styleUrls: ['./input-app.component.scss']
})
export class InputAppComponent {
  @Input () value= "";
  @Input () lable= "";
  @Output() valueChange = new EventEmitter<string>();

  internalValue: string = this.value;

  onValueChange() {
    this.valueChange.emit(this.internalValue);
  }
}
