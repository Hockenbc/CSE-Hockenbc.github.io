/*Author: Courtney Hockenberry */
let arrow = document.getElementById("arrow");
arrow.onClick = ()=>{
    if(document.getElementById("nav-items").classList.contains("hide-small")){
        arrow.innerHTML = '&#9650;';
        document.querySelector("#nav-items").classList.toggle("hide-small");
    }
    else if(!document.getElementById("nav-items").classList.contains("hide-small")){
        arrow.innerHTML = '&#9650;';
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


const thisfunction = (e)=>{
    if(e.target.innerHTML == "Small"){
        smallPic.classList.remove("hide");
        if(!mediumPic.classList.contains("hide")){
            mediumPic.classList.add("hide");
        }
        if(!largePic.classList.contains("hide")){
            largePic.classList.add("hide");
        }
    }
    if(e.target.innerHTML == "Medium"){
        mediumPic.classList.remove("hide");
        if(!smallPic.classList.contains("hide")){
            smallPic.classList.add("hide");
        }
        if(!largePic.classList.contains("hide")){
            largePic.classList.add("hide");
        }
    }
    if(e.target.innerHTML == "Large"){
        largePic.classList.remove("hide");
        if(!mediumPic.classList.contains("hide")){
            mediumPic.classList.add("hide");
        }
        if(!smallPic.classList.contains("hide")){
            smallPic.classList.add("hide");
        }
    }
};

document.getElementById("small").onclick = thisfunction;
document.getElementById("medium").onclick = thisfunction;
document.getElementById("large").onclick = thisfunction;
