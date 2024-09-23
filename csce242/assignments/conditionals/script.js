let arrow = document.getElementById("arrow");
arrow.onClick = ()=>{
    if(document.getElementById("nav-items").classList.contains("hide-small")){
        arrow.innerHTML = '&#9650;';
        document.querySelector("#nav-items").classList.toggle("hide-small");
    }
    else if(!document.getElementById("nav-items").classList.contains("hide-small")){
        arrow.innerHTML - '&#9650;';
        document.querySelector("#nav-items").classList.toggle("hide-small");
    }
};

document.getElementById("main-slider").oninput = ()=>{
    let val = document.getElementById("main-slider").value;
    document.getElementById("color-slider").style.backgroundColor = 'rgb('+val+',0,0)';
};

const color = document.getElementById("color-slider");
const pic = document.getElementById("pic-choose");
document.getElementById("exercise-2").onclick = ()=>{
    if(!color.classList.contains("hide")){
        color.classList.add("hide");
    }
    if(pic.classList.contains("hide")){
        pic.classList.remove("hide");
    }
};

document.getElementById("exercise-1").onclick = ()=>{
    if(color.classList.contains("hide")){
        color.classList.remove("hide");
    }
    if(!pic.classList.contains("hide")){
        pic.classList.add("hide");
    }
};
const smallPic = document.getElementById("small-pic");
const mediumPic = document.getElementById("medium-pic");
const largePic = document.getElementById("large-pic");
