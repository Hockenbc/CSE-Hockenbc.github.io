
/*or .onchange*/ 
document.getElementById("main-slider").oninput = ()=>{
    let val = document.getElementById("main-slider").val+"px";
    document.getElementById("slider-img").style.left = val;
}

let count=0;
document.getElementById("counter-btn").onclick = ()=>{
    count += 1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("img-btn").onclick = ()=>{
    location.reload();
}

