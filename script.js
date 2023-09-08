var display=document.getElementById("display");
function join(num){
    display.value+=num;
}
function clr(){
   display.value="";
   display.placeholder="0";
}
function dl(){
    display.value=display.value.slice(0,-1);
}
function per(){
    display.value=display.value/100;
}
function cal(){
    try{
        display.value=eval(display.value);
    }
    catch(err){
        display.value="";
        display.placeholder="invalid"
    }

}
