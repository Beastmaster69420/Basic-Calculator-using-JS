const defaultRes = 0;
let currentResult = defaultRes;
let logEntries = [];

function writeLogEntry(op,prevRes,operand,result) {
    const entryDetails={
        op: op,
        prevRes: prevRes,
        operand: operand,
        result: result
    };  
    logEntries.push(entryDetails);
    console.log(logEntries);
}

function calcResult(calcType, mathop){
    const calcLog = `${currentResult}`+mathop+`${userInput.value}`;
    const initialResult = currentResult;
    if (calcType ==='ADD'){
        currentResult += +userInput.value;
    }else if (calcType ==='SUBTRACT'){
        currentResult -= +userInput.value;
    }else if (calcType ==='MULTIPLY'){
        currentResult *= +userInput.value;
    }else {
        currentResult /= +userInput.value;
    }
    outputResult(currentResult, calcLog);
    writeLogEntry(calcType,initialResult,+userInput.value,currentResult);
}

function sum () {
    calcResult('ADD','+');
  
}

function subtract() {
    calcResult('Subtract','-');
}

function multiply() {
    calcResult('MULTIPLY','*');
}

function divide(){ 
   calcResult('DIVIDE','/');
}

addBtn.addEventListener('click',sum);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
