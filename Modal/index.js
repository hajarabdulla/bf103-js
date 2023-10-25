const minus=document.getElementById("minus");
const plus=document.getElementById("plus");
const inputadd=document.getElementById("inputadd");
function azalt(){
minus.nextElementSibling.innerHTML=parseInt(minus.nextElementSibling.innerHTML)-parseInt(inputadd.value)
if(minus.nextElementSibling.innerHTML<=0) minus.disabled=true
}
function artir(){
    minus.nextElementSibling.innerHTML=parseInt(minus.nextElementSibling.innerHTML)+parseInt(inputadd.value)
 minus.disabled=false;
}