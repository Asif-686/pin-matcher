const code = Math.floor(1000 + Math.random() * 9000).toString();
var chances = 2;
document.getElementById('notify').style.display = "none";
document.getElementById('notifyok').style.display = "none";
var pin= document.getElementById('pin');
var pinclick= document.getElementById('generate').addEventListener('click',function () {
    pin.value = code;
    pin.style.textAlign ='center';
});
var display = document.getElementById('display');
display.style.textAlign = 'center';
const one = document.getElementById('1').addEventListener('click',function () {
    display.value = display.value + "1";
});
const two = document.getElementById('2').addEventListener('click',function () {
    display.value = display.value + "2";
});
const three = document.getElementById('3').addEventListener('click',function () {
    display.value = display.value + "3";
});
const four = document.getElementById('4').addEventListener('click',function () {
    display.value = display.value + "4";
});
const five = document.getElementById('5').addEventListener('click',function () {
    display.value = display.value + "5";
});
const six = document.getElementById('6').addEventListener('click',function () {
    display.value = display.value + "6";
});
const seven = document.getElementById('7').addEventListener('click',function () {
    display.value = display.value + "7";
});
const eight = document.getElementById('8').addEventListener('click',function () {
    display.value = display.value + "8";
});
const nine = document.getElementById('9').addEventListener('click',function () {
    display.value = display.value + "9";
});
const zero = document.getElementById('0').addEventListener('click',function () {
    display.value = display.value + "0";
});
const C = document.getElementById('C').addEventListener('click',function () {
    display.value = "";
});
const back = document.getElementById('*').addEventListener('click',function () {
    display.value = display.value.slice(0,-1);
});

document.getElementById('submit').addEventListener('click',function(){
    const tryit = document.getElementById('try');
    
    if (code === display.value)
    {
        document.getElementById('notifyok').style.display = "block";
        document.getElementById('notify').style.display = "none";
    }
    else
    {
       
        document.getElementById('notify').style.display = "block";
        document.getElementById('notifyok').style.display = "none";
        if(chances >= 1){
            var x= (chances).toString();
            tryit.innerHTML = x + " try left";
             chances--;
        }
        else{
            var x= (chances).toString();
            tryit.innerHTML = x + " try left";
             chances--;
            const button = document.getElementById('submit');
            button.style.display ="none";
            document.getElementById('notify').innerHTML="&#9888;You are a thief,door will not open"
        }
        
        
    }
})