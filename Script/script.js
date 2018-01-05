var box = document.getElementById('displayScreen');

function toScreen(input){
  box.value += input;
}

function clrscr(){
  box.value = '';
}

function answer(){
  var result = eval(box.value);  
  box.value = result;  
}

function backspace(){
  var num = box.value;
  var len = num.length - 1;
  var newNum = num.substr(0, len);
  box.value = newNum;
}
