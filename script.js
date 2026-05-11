const cla = document.getElementsByClassName("square");

for (let i = 0; i < cla.length; i++) {

    cla[i].addEventListener("mouseover", () => {

        if (i === 0) {
            cla[1].style.backgroundColor = "#6F4E37";
            cla[2].style.backgroundColor = "#6F4E37";

        } else if (i === 1) {
            cla[0].style.backgroundColor = "#6F4E37";
            cla[2].style.backgroundColor = "#6F4E37";

        } else {
            cla[0].style.backgroundColor = "#6F4E37";
            cla[1].style.backgroundColor = "#6F4E37";
        }

    });
cla[i].addEventListener("mouseout", () => {

        if (i === 0) {
            cla[1].style.backgroundColor = "#E6E6Fa";
            cla[2].style.backgroundColor = "#E6E6Fa";

        } else if (i === 1) {
            cla[0].style.backgroundColor = "#E6E6Fa";
            cla[2].style.backgroundColor = "#E6E6Fa";

        } else {
            cla[0].style.backgroundColor = "#E6E6Fa";
            cla[1].style.backgroundColor = "#E6E6Fa";
        }

    });
}