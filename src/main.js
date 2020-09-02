let bigPic = document.querySelector("#big");
let smallPics = document.querySelectorAll(".small");

for(let i = 0; i < smallPics.length; i++){
    smallPics[i].addEventListener("click", mainpic);
}

function mainpic(){
    let smallPicAttribute = this.getAttribute("src");
    bigPic.setAttribute("src", smallPicAttribute);
}