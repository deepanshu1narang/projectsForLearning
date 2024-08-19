const flex = document.querySelector(".flex");
const addMore = document.querySelector('[data-add-box]');
const boxes = document.querySelectorAll(".box");

addMore.addEventListener("click", () => {
    // e.stopPropagation();
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    flex.append(newBox);
});


function addGlobalListener(type, selector, cb) {
    // if i want all the divs with class box to work like this
    // document.addEventListener(type, (e) => {

    // if I want only those divs with class box to work like this then use --->
    flex.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            const box = e.target;
            box.classList.toggle("clicked");
        }
    })
}

addGlobalListener("click", ".box", (e) => {
    const box = e.target;
    box.classList.toggle("clicked");
})
