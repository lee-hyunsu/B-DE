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

document.querySelector('.myButton').addEventListener('click', function() {
    alert('로그인!');
  });

document.querySelector('.myButton1').addEventListener('click', function() {
  alert('회원가입 창으로 이동합니다!');
});


// cli();

const input = document.querySelector('input[type=text]');
const msg = document.querySelector('.message');

input.addEventListener('blur', function () {
    if (input.value.length < 5) {
      msg.innerHTML = '아이디는 영문이름으로 입력해 주세요';
    } else {
      msg.innerHTML = '';
    }
  });

  // alert("input");

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );