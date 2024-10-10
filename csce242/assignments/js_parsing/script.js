/*Author: Courtney Hockenberry*/
const getIceCream = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const showIceCream = async() => {
    const iceCreamData = await getIceCream();

    iceCreamData.forEach((icecream)=>{
        const section = document.createElement("section");
        section.classList.add("ice-cream");
        
        const img = document.createElement("img");
        img.src= `https://portiaportia.github.io/json/images/ice-creams/${icecream.image}`;
        img.alt = icecream.name;
        section.append(img);
        
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const h3 = document.createElement("h3");
        h3.textContent = icecream.name;
        overlay.append(h3);
        

        section.append(overlay);

        document.getElementById("ice-cream-section").append(section);
    });
};

showIceCream();

