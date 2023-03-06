class Calculator{
    constructor(previousOperandText,curOperandText)
    {
        this.previousOperandText = previousOperandText;
        this.curOperandText = curOperandText;
        this.clear();
    }
    clear(){
        this.previousOperand = '';
        this.curOperand = '';
        this.operation = undefined;
    }

    chooseOperations(operator){
        if(this.curOperand === '')//To avoid double click
            return
        if(this.previousOperand !== '')
            this.compute()
        
        this.operation = operator
        this.previousOperand = this.curOperand
        this.curOperand = ''
        
        // this.appendNumber(operator)
    }   
    compute(){
        if(this.operation==null)return
        let result;
        let op1 = +(this.previousOperand);
        let op2 = +(this.curOperand);
        let operator = this.operation

        switch(operator){
            case('+') :
                result = op1 + op2;
                break;
            case('-') :
                result = op1 - op2;
                break;
            case('*') :
                result = op1 * op2;
                break;
            case('÷') :
                result = op1 / op2;
                break;

        }
        this.previousOperand = '';
        this.curOperand = result;
        // this.updateDisplay();
    }
    delete(){
        this.curOperand = this.curOperand.slice(0,-1)
    }

    appendNumber(number){
        if(number === '.' && this.curOperand.includes('.'))
            return
        this.curOperand = curOperandText.innerText + number
    }
    updateDisplay(){
        
        this.curOperandText.innerText = this.curOperand
        this.previousOperandText.innerText = this.previousOperand;
        if(this.operation!=null && this.previousOperand!='')
            this.previousOperandText.innerText+=" " + this.operation;
    }
};
console.log(Calculator);
//Getting the buttons and Text operands
const numbers = document.querySelectorAll('[data-num]');
const operations = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equal]');
const AC = document.querySelector('[data-AC]');
const DEL = document.querySelector('[data-del]');
const previousOperandText = document.querySelector('[data-prev]');
const curOperandText = document.querySelector('[data-cur]');
const userKeyInput = document.getElementById('calculator-grid');

// Create a new Calculator
const calculator = new Calculator(previousOperandText,curOperandText)

// When number buttons are clicked 
// Add an even Listner for all of them
numbers.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)

        calculator.updateDisplay();
    })
});

// When Operations are Clicked

operations.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperations(button.innerText)
        calculator.updateDisplay();
    })
});

equalsBtn.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
})

AC.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})

DEL.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})


// userKeyInput.addEventListener('keydown', (event)=>{
//     if(event.keyCode == 13){
//         calculator.clear()
//         calculator.updateDisplay()
//     }
// })
document.addEventListener('keydown', (event)=> {
    
    if(calculator.operation==null || calculator.curOperand=='')
        return
    switch (event.key) {
        case "Enter":
            event.preventDefault();
            calculator.compute()
            calculator.updateDisplay()
            break;
        case "+":
            calculator.chooseOperations('+')
            calculator.updateDisplay();
            break;
        case "-":
            calculator.chooseOperations("-")
            calculator.updateDisplay();
            break;
        case "/":
            calculator.chooseOperations("'÷'")
            calculator.updateDisplay();
            break;
        case "*":
            calculator.chooseOperations("*")
            calculator.updateDisplay();
            break;
        default:
            break;
    }
    if (event.key === "Enter") {
        
       
        
    }
})