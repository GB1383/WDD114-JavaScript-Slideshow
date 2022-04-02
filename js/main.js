let index = 0;

const img = document.querySelector("img");
const next = document.getElementById("next-button");
const back = document.getElementById("back-button");

const imgArray = [
    "/img/Robot-1.jpg",
    "/img/Robot-2.jpg",
    "/img/Robot-3.jpg",
    "/img/Robot-4.jpg",
];

/* IMAGE CLICK EVENT */

img.addEventListener("click", imageNext);

/* BUTTON CLICK EVENT */
next.addEventListener("click", imageNext);
back.addEventListener("click", imageBack);

/* KEYBOARD BUTTON EVENT */
img.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
        imageNext();

    }
});

function imageNext() {
    index++;
    img.src = imgArray[index % imgArray.length];
}

function imageBack() {
    if (index > 0) {
    index--;
    img.src = imgArray[index % imgArray.length];
} else {
    index= imgArray.length-1;
    img.src = imgArray[index % imgArray.length];
}
}