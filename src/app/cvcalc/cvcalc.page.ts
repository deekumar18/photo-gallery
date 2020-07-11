import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-cvcalc',
  templateUrl: './cvcalc.page.html',
  styleUrls: ['./cvcalc.page.scss'],
})
export class CvcalcPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '1';
  oldValue = '0';
  

  lastOperator = 'x';
  readyForNewInput = true;
  numberGroups = [
    ['X', '-', '>'],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 'skip', 0]
  ];

  onButtonPress(symbol) {
    console.log(symbol);

    if (isNumber(symbol)) {
      console.log('is a number');
      if (this.readyForNewInput)
        this.value = '' + symbol;
      else
        this.value += '' + symbol;
      this.readyForNewInput = false;
    }
    else if (symbol === 'c') {
      this.value = '0';
      this.readyForNewInput = true;
    }
    else if (symbol === '=') {
      if (this.lastOperator === '>')
        this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));
      else if (this.lastOperator === '-')
        this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
      else if (this.lastOperator === '+')
        this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
      else if (this.lastOperator === '/')
        this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
      this.readyForNewInput = true;
    }
    else { // operator
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }

}
