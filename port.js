var a = document.getElementById("t10");
var b = document.getElementById("t12");
a.addEventListener("click",()=>{
    window.location.href="10th marksheet.PDF"
});
b.addEventListener("click",()=>{
    window.location.href="12th marksheet.PDF"
});
function fun2(){
   
    let v=document.querySelectorAll("input");
    let t=document.getElementById("txt");
    t.value="";
    v.forEach(s=>s.value=""); 
    alert("Form Submitted Successfully! Thank You!");
   
}
