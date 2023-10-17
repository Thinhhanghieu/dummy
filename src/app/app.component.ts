import { Component, NgModule, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  valueInputFirst = '';
  valueInputSecond = '';
  result: any;

  receiveData(operator: string) {
    if (
      this.valueInputFirst.length === 0 ||
      this.valueInputSecond.length === 0
    ) {
      alert('Input value is not set');
      return;
    }
    let value1 = parseFloat(this.valueInputFirst);
    let value2 = parseFloat(this.valueInputSecond);
    switch (operator) {
      case '+':
        this.result = `${value1} + ${value2} = ${value1 + value2}`;
        break;
      case '-':
        this.result = `${value1} - ${value2} = ${value1 - value2}`;
        break;
      case 'x':
        this.result = `${value1} x ${value2} = ${value1 * value2}`;
        break;
      case '/':
        if (value2 === 0) {
          alert('Division by zero is not allowed.');
          return;
        }
        this.result = `${value1} / ${value2} = ${value1 / value2}`;
        break;
      default:
        alert('Invalid operator.');
        return;
    }
  }
  onSubmit() {}
}
