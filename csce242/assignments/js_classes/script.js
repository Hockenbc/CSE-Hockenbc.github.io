/*
*Author: Courtney Hockenberry
*/

function openModal(bird) {
    const modal = document.getElementById("bird-modal");
    const birdDetails = document.getElementById("bird-details");
    const birdImage = document.getElementById("bird-image");

    // Set the bird details and image
    birdDetails.innerHTML = `
        <p><strong>Title</strong>: ${bird.title}</p>
        <p><strong>Size</strong>: ${bird.size}</p>
        <p><strong>Lifespan</strong>: ${bird.lifespan}</p>
        <p><strong>Food</strong>: ${bird.food}</p>
        <p><strong>Habitat</strong>: ${bird.habitat}</p>
        <p><strong>Fact</strong>: ${bird.fact}</p>
    `;
    birdImage.innerHTML = `<img src="images/${bird.pic}" alt="${bird.title}">`;

    modal.classList.remove("hidden");  // Show the modal 
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById("bird-modal");
    modal.classList.add("hidden");  // Hide the modal
}

// Sets up the close button once the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.close-btn').addEventListener('click', closeModal);
});
    

class Bird {
    constructor(title, size, lifespan, food, habitat, fact, pic){
        this.title = title;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("bird");

        section.onclick = () => {
            openModal(this);
        };

        //create a header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);

        columnsDiv.append(this.picture(this.pic));

        return section;
    }
    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
     }
    
}


const birds = [];

birds.push(new Bird("Hummingbird", "2.5 Inches", "3-5 Years", "Nectar (Sugar Water)", "Trees", "They're nicknamed 'Hummers'", "hummingbird.jpg"));
birds.push(new Bird("Blue Jay", "9-12 Inches", "7 Years", "Nuts, Seeds, Insects", "Woodlands","Blue Jays are known for their intelligence.", "bluejay.jpg"));
birds.push(new Bird("Cardinal","8-9 Inches", "3 Years", "Seeds, Fruits, insects", "Shrubbery, gardens","Cardinals are known for their vibrant red color.", "cardinal.jpg"));
birds.push(new Bird("Robin","7-8 Inches", "2 Years", "Earthworns, insects","Gardens, Forests", "Robings are known as the harbinger of spring.", "robin.jpg"));

birds.forEach((bird)=>{
    document.getElementById("bird-list").append(bird.item);
    });
