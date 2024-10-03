/*Author: Courtney Hockenberry */
const birthdayInfo = ["birthday", "Another year! Your getting old..","images/birthday.jpg"];
const clownInfo = ["clown", "Clowns are pretty cool! Kinda..", "images/clown.jpg"];
const rainInfo = ["rain", "It's raining! I would stay inside!", "images/rain.jpg"];
const readInfo = ["read", "Get Smarter.", "images/read.jpg"];
const shovelInfo = ["shovel", "A shovel? Looks like alot of Work.", "images/shovel.jpg"];
const workInfo = ["work", "Working hard or Hardly Workin?", "images/work.jpg"];

const imgs = {
birthday: birthdayInfo,
clown:clownInfo,
rain:rainInfo,
read:readInfo,
shovel:shovelInfo,
work:workInfo
};

const table = document.getElementById("img-table");
let count=0;

for(let key in imgs){
    if(count % 3 === 0){
        var tr = document.createElement("tr");
        table.append(tr);
    }
    let image = document.createElement("img");
    const data = document.createElement("td");
    image.src = imgs[key][2];
    data.append(image);
    tr.append(data);

    data.onclick = () => {
        document.getElementById("title").innerHTML = imgs[key][0];
        document.getElementById("desc-txt").innerHTML = imgs[key][1];
    };
    count++;
}