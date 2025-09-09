let datetxt = "10 September 2025";
let datatxtletter = "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
let titleLetter = "For you";

let charArrDate = datetxt.split("");
let charArrDateLetter = datatxtletter.split("");
let charArrTitle = titleLetter.split("");

let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;

let date__of__birth = document.querySelector(".date__of__birth span");

setTimeout(function () {
  if (date__of__birth) {
    let timeDatetxt = setInterval(function () {
      if (currentIndex < charArrDate.length) {
        date__of__birth.textContent += charArrDate[currentIndex];
        currentIndex++;
      } else {
        let i = document.createElement("i");
        i.className = "fa-solid fa-star";
        document.querySelector(".date__of__birth").prepend(i);
        document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
        clearInterval(timeDatetxt);
      }
    }, 100);
  }
}, 12000);

var intervalContent;
var intervalTitle;

$("#btn__letter").on("click", function () {
  let text__letter = document.querySelector(".text__letter p");
  let title__letter = document.querySelector(".title__letter");

  $(".box__letter").slideDown();
  setTimeout(function () {
    $(".letter__border").slideDown();
  }, 1000);

  setTimeout(function () {
    intervalTitle = setInterval(function () {
      if (title__letter && currentIndexTitle < charArrTitle.length) {
        title__letter.textContent += charArrTitle[currentIndexTitle];
        let i = document.createElement("i");
        i.className = "fa-solid fa-heart";
        title__letter.appendChild(i);
        currentIndexTitle++;
      } else {
        clearInterval(intervalTitle);
      }
    }, 100);
  }, 2000);

  setTimeout(function () {
    document.querySelector("#heart__letter")?.classList.add("animationOp");
    document.querySelector(".love__img")?.classList.add("animationOp");
    document.querySelector("#mewmew")?.classList.add("animationOp");
  }, 2800);

  setTimeout(function () {
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.add("animation");
    });
  }, 3500);

  setTimeout(function () {
    intervalContent = setInterval(function () {
      if (text__letter && currentIndexLetter < charArrDateLetter.length) {
        text__letter.textContent += charArrDateLetter[currentIndexLetter];
        currentIndexLetter++;
      } else {
        clearInterval(intervalContent);
      }
    }, 50);
  }, 1000);
});

$(".close").on("click", function () {
  clearInterval(intervalContent);

  let title__letter = document.querySelector(".title__letter");
  let text__letter = document.querySelector(".text__letter p");

  if (title__letter) title__letter.textContent = "";
  if (text__letter) text__letter.textContent = "";

  currentIndexLetter = 0;
  currentIndexTitle = 0;

  document.querySelector("#heart__letter")?.classList.remove("animationOp");
  document.querySelector(".love__img")?.classList.remove("animationOp");
  document.querySelector("#mewmew")?.classList.remove("animationOp");

  document.querySelectorAll(".heart").forEach((item) => {
    item.classList.remove("animation");
  });

  $(".box__letter").slideUp();
  $(".letter__border").slideUp();
});

let mailBox = document.querySelector(".mail");
let boxmail = document.querySelector(".boxMail");
var close = document.querySelector(".fa-xmark");

if (mailBox && boxmail) {
  mailBox.onclick = function () {
    mailBox.classList.toggle("active");
    boxmail.classList.add("active");
  };
}

if (close && boxmail) {
  close.addEventListener("click", function () {
    boxmail.classList.remove("active");
  });
}

// Song JS
window.addEventListener('click', function () {
  const music = document.getElementById('bg-music');
  if (music) {
    music.play();
  }
}, { once: true });
