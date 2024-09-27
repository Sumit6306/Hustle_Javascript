var gstatus = document.querySelector("h5");

var btn= document.querySelector("#add");
var check =0;

btn.addEventListener("click", function(){
   if(check ==0){
    gstatus.innerHTML="Jai Shree Ram";
    gstatus.style.color="black"
     gstatus.style.backgroundColor="green"
    btn.innerHTML="Remove Him"
    check=1;
   }else{
    gstatus.innerHTML="Jai Ho";
    gstatus.style.color="black"
     gstatus.style.backgroundColor="orange"
    btn.innerHTML="Add Him"
    check=0;
   }
})

