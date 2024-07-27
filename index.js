var chances = 2;
document.getElementById('notify').style.display = "none";
document.getElementById('notifyok').style.display = "none";
var pin= document.getElementById('pin');
var pinclick= document.getElementById('generate').addEventListener('click',function () {
    pin.value = Math.floor(1000 + Math.random() * 9000).toString();
    pin.style.textAlign ='center';
});
var display = document.getElementById('display');
display.style.textAlign = 'center';

document.getElementById('submit').addEventListener('click',function(){
    const tryit = document.getElementById('try');
    
    if (pin.value == display.value)
    {
        document.getElementById('notifyok').style.display = "block";
        document.getElementById('notify').style.display = "none";
        document.getElementById('display').value = '';
        document.getElementById('pin').value = '';
        tryit.style.display = 'none';
    }
    else
    {
       
        document.getElementById('notify').style.display = "block";
        document.getElementById('notifyok').style.display = "none";
        var x = (chances).toString();
        if(chances >= 1){           
            tryit.innerHTML = x + " try left";
             chances--;
        }
        else{
            tryit.innerHTML =  "No try left";
            document.getElementById('submit').style.display ="none";
            document.getElementById('display').value = '';
            document.getElementById('pin').value = '';
            document.getElementById('notify').innerHTML="&#9888;You are a thief,door will not open"
        }
        
        
    }
})