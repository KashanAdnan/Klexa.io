let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content-acc");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      icons[i].classList.remove("fa-angle-down");
      icons[i].classList.add("fa-angle-up");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-angle-up");
      icons[i].classList.add("fa-angle-down");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-angle-up");
        icons[j].classList.add("fa-angle-down");
      }
    }
  });
}

setInterval(() => {
  if (window.outerWidth <= 1000) {
    document.getElementById("image").src = "./images/anwarpng.png";
  } else {
    document.getElementById("image").src = "./images/alamir_anwar.png";
  }
}, 100);

const button1 = document.getElementById("button1");
const video1 = document.getElementById("video1");

button1.addEventListener("click", () => {
  button1.style.display = "none";
  video1.style.display = "block";
  video1.load();
  video1.autoplay = true;
});

video1.onended = function (e) {
  button1.style.display = "flex";
  video1.style.display = "none";
};
const button2 = document.getElementById("button2");
const video2 = document.getElementById("video2");

button2.addEventListener("click", () => {
  button2.style.display = "none";
  video2.style.display = "block";
  video2.load();
  video2.autoplay = true;
});

video2.onended = function (e) {
  button2.style.display = "flex";
  video2.style.display = "none";
};
