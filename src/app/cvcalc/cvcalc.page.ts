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
  
  value = '';
  
  imgArr = ['3','5','6','8','12','15','29','42','57','70','74']
  resultArr = []
  imgVal = this.imgArr[0];
  imgPos = 0;

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
    else if (symbol === '>') {
      this.imgVal = this.imgArr[this.imgPos]
      this.imgPos++
      this.resultArr.push(this.value)
      this.value = ''
      this.readyForNewInput = true

    }
    else if (symbol === 'skip') {
      this.imgVal = this.imgArr[this.imgPos]
      this.imgPos++
      this.value = ''
      this.readyForNewInput = true

    }
     else { // operator
      this.readyForNewInput = true;
      this.imgVal = this.value;
      this.lastOperator = symbol;
    }
  }

}
