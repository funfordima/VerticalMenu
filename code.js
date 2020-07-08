let menuLink = document.querySelectorAll(".nav > li > a");

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function (event) {
        event.preventDefault();

        let target = event.target;

        if (target.classList.contains("active")) {
            target.classList.remove("active");
        } else {
            let openLink = document.querySelector(".active");
            if (openLink) {
                openLink.classList.remove("active");
            }
            target.classList.add("active");
        }
    });
}

// console.log(menuLink);