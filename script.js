let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content-acc');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-angle-down');
            icons[i].classList.add('fa-angle-up');
        }
        else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-angle-up');
            icons[i].classList.add('fa-angle-down');
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-angle-up');
                icons[j].classList.add('fa-angle-down');
            }
        }
    });
}