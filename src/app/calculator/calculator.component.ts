import { Component, OnInit } from '@angular/core';

 @Component({
 selector: 'app-calculator',
 templateUrl: './calculator.component.html',
 styleUrls: ['./calculator.component.css']
 })
 export class CalculatorComponent implements OnInit {
    currentNumber = '0';
    firstOperand = Number();
    operator = '';
    waitForSecondNumber = false;

    

 constructor() { }

 ngOnInit() {
 }

 public getNumber(v: string){
     console.log(v);
     if(this.waitForSecondNumber)
     {
     this.currentNumber = v;
     this.waitForSecondNumber = false;
     }else{
     this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    
     }
     }
 getDecimal(): void{
     if(!this.currentNumber.includes('.')){
     this.currentNumber += '.';
     }
     }
    
 private doCalculation(op :string, secondOp:any){
     switch (op){
       case '+':
        return this.firstOperand += secondOp;
       case '-':
        return this.firstOperand -= secondOp;
       case '*':
        return this.firstOperand *= secondOp;
       case '/':
        return this.firstOperand /= secondOp;
       case '=':
        return secondOp;
      }
      }
 public getOperation(op: string){
     console.log(op);
                
     if(this.firstOperand === Number()){
         this.firstOperand = Number(this.currentNumber);
                
     }else if(this.operator){
     const result = this.doCalculation(this.operator , Number(this.currentNumber))
     this.currentNumber = String(result);
     this.firstOperand = result;
      }
      this.operator = op; 
      this.waitForSecondNumber = true;

     console.log(this.firstOperand);

     } 
 public clear(){
     this.currentNumber = '0';
     this.firstOperand = Number();
     this.operator = '';
     this.waitForSecondNumber = false;
     } 
    }                    
 

