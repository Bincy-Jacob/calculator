let x=document.getElementById("res");
function valuedisp(a) 
{
    x.value+=a;
 }

 function res()
 {
    x.value=eval(x.value);
 }
function acfn(){
    x.value=" ";
}
function clr(){
    x.value=x.value.substring(0,x.value.length-1);
}