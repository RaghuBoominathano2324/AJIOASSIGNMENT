var divContainer=document.querySelector('#MAN');
var display=0;
let showOrHide=function(){
    if(display===1){
    divContainer.style.display='flex';
display=0;    
}
else{
    divContainer.style.display='none';
    display=1;
}
}




document.querySelector('#navbuttons1').addEventListener('click', showOrHide1);




var divContainer2=document.querySelector('#MAN');
var display2=0;
let showOrHide2=function(){
    if(display2===1){
    divContainer.style.display='flex';
display2=0;    
}
else{
    divContainer.style.display='none';
    display2=1;
}
}
document.querySelector('#navbuttonwomen').addEventListener('click', showOrHide2);