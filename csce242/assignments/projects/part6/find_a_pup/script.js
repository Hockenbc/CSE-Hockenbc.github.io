document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

const getPuppies = async () => {
    try { 
        return (await fetch("https://hockenbc.github.io/part6/find_a_pup/json/puppies.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showPuppies = async () => {
    const puppyData = await getPuppies();

    //create a section for each puppy
    puppyData.forEach((puppy) => {
        const section = document.createElement("section");
        section.classList.add("one");

        //create and append the puppy image
        const img= document.createElement("img");
        img.src = puppy.img_name;
        img.alt = puppy.name;
        img.id = "puppy-img";
        section.append(img);

        //create a dic for the name and append the name
        const nameDiv = document.createElement("div");
        nameDiv.id= "names";
        const h1 = document.createElement("h1");
        h1.innerHTML = `<i>${puppy.name}</i>`;
        nameDiv.append(h1);
        section.append(nameDiv);

        //create and append the gender information

        const genderDiv = document.createElement("div");
        genderDiv.id = "gender";
        const genderP = document.createElement("p");
        genderP.textContent = `Gender: ${puppy.gender}`;
        genderDiv.append(genderP);
        section.append(genderDiv);

        // Create and append the description
        const descriptionDiv = document.createElement("div");
        descriptionDiv.id = "descriptions";
        const descriptionP = document.createElement("p");
        descriptionP.textContent = puppy.description;
        descriptionDiv.append(descriptionP);
        section.append(descriptionDiv);

        // Append the completed section to the main container
        document.getElementById("species").append(section);
    
    });
};

showPuppies();