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
    inputResult = +userInput.value;
    if(calcType !=="ADD" && calcType!=="SUBTRACT" && calcType !=="MULTIPLY" && calcType !=="DIVIDE" || !inputResult){//The last condition is based on truthy and falsy values entered by the user.
        return;
    }
    const calcLog = `${currentResult}`+mathop+`${userInput.value}`;
    const initialResult = currentResult;
    if (calcType ==='ADD'){
        currentResult += inputResult;
    }else if (calcType ==='SUBTRACT'){
        currentResult -= inputResult;
    }else if (calcType ==='MULTIPLY'){
        currentResult *= inputResult;
    }else {
        currentResult /= inputResult;
    }
    outputResult(currentResult, calcLog);
    writeLogEntry(calcType,initialResult,inputResult,currentResult);
}

function sum () {
    calcResult('ADD','+');
  
}

function subtract() {
    calcResult('SUBTRACT','-');
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
