var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

// crsr.style.backgroundColor = "green";

//mouse ko move krna hai pura main div  upar to waha lagega eventlisterner
// yaha pr Rahul function hai

main.addEventListener("mousemove", function(rahul){ 
    // console.log(rahul.x)
// crsr.style.left jb hi kam karega jb aap cursor ke position absolute doge tb
//rahul.x+"px" = unit hai to batani padti hi hai

crsr.style.left = rahul.x+"px"
crsr.style.top = rahul.y+"px"

})