let bigPic = document.querySelector("#big");
let smallPics = document.querySelectorAll(".small");

for(let i = 0; i < smallPics.length; i++){
    smallPics[i].addEventListener("click", changepic);
}

function changepic(){
    let smallPicAttribute = this.getAttribute("src");
    bigPic.setAttribute("src", smallPicAttribute);
}