
var myHeading = document.querySelector('h1');



var number1 = 10;
var number2 = 15;
var string1 = "qwerty";
var danet = true;
var list = [1,"zxcvbn", "pro100!", 15];
var summa = number1 + number2;
myHeading.textContent = string1;

if(summa === 25){
    myHeading.textContent = 'да';
} else{
    myHeading.textContent = 'нет'
}

function umnoshit(num1,num2) {
    var otvet= num1*num2;
    myHeading.textContent = otvet;
}
umnoshit(1,404);

function rasdelit(num1, num2) {
    var otvet= num1/num2;
    alert(otvet)
}
rasdelit(404 ,2);

function polus(num1,num2) {
    var otvet= num1+num2;
    myHeading.textContent = otvet;
}
polus(20,5);

function minus(num1,num2) {
    var otvet= num1-num2;
    myHeading.textContent = otvet;
    return otvet;
}
//console.log(minus(20, 5));
minus(20,5);

document.querySelector('html').onclick = function () {
    alert('Куда ты тычешь?');
};

    function factorial(num1){
        if (num1 < 0){
            return -1;
        }
        else if (num1 == 0){
            return 1;
        }

        else{
            return(num1 * factorial(num1 - 1));
        }

    }
    console.log(factorial(5));

    function multiplyBy() {
            num1 = document.getElementById("firstNumber").value;
            num2 = document.getElementById("secondNumber").value;
         document.getElementById("result").innerHTML = num1 * num2;
    }
    function divideBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
      document.getElementById("result").innerHTML = num1 / num2;
    }


