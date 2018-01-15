var numericValue = '';
var text = '';
var result = 0;
var operationCache = '';
var count = 0;
var sign = '';
var tempValue = 0;

function inputValbtn (val) {
    numericValue += val;
    setInpVal(val);
}

function setInpVal(val) {
    text = text + val;

    document.getElementById('value_item').value = text;
}

//очистка строки ввода, переменных
function clrInp () {
    numericValue = '';
    text = '';
    result = 0;
    operationCache = '';
    tempValue = 0;
    sign = '';

    document.getElementById('value_item').value = text;
}

//обработка арифметического знака
function handleOperation(sign) {
    result = +numericValue;
    numericValue = '';
    operationCache = sign;

    text = text + ' ' + operationCache + ' ';
    document.getElementById('value_item').value = text;
}

//расчет
function getCount () {
   
    if (+tempValue !== 0) {
        result = tempValue;
    } 

  
    if (operationCache === '+') {
        result += +numericValue;
    } else if (operationCache === '-') {
        result -= +numericValue;
    } else if (operationCache === '*') {
        result *= +numericValue;
    } else if (operationCache === '/') {
        result /= +numericValue;
    } 
    
    text = result;
    document.getElementById('value_item').value = text;

    //результат запишем в темповую переменную, чтобы использовать в последующих вычислениях
    tempValue = result;
}


function DisableNextButton() {
    count += 1;
    var btn = document.getElementById('btn');
    if(count >= 1) {
        btn.disabled = true;
    }
         
}

function EnableNextButton() {
    var btn = document.getElementById('btn');
    btn.disabled = false;
           
}

//result numericValue
//5      2
//2      4