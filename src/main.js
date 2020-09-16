// let a = prompt(alert("이름을 입력해주세요.", ""));



// let bigPic = document.querySelector("#big");
// let smallPics = document.querySelectorAll(".small");

// for(let i = 0; i < smallPics.length; i++){
//     smallPics[i].addEventListener("click", mainpic);
// }

// function mainpic(){
//     let smallPicAttribute = this.getAttribute("src");
//     bigPic.setAttribute("src", smallPicAttribute);
// }

document.querySelector('.myButton').addEventListener('click', function cli() {
    alert('Clicked!');
  });



cli();

const input = document.querySelector('input[type=text]');
const msg = document.querySelector('.message');

input.addEventListener('blur', function () {
    if (input.value.length < 2) {
      msg.innerHTML = '이름은 2자 이상 입력해 주세요';
    } else {
      msg.innerHTML = '';
    }
  });

  // alert("input");