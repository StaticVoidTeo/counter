const add = document.querySelector(".green");
const sub = document.querySelector(".red");
const counter = document.querySelector(".counter");
const reset = document.querySelector(".reset");

add.addEventListener("click", () => {
    let val = parseInt(counter.innerHTML);
    val++;
    counter.innerHTML = val;
})

sub.addEventListener("click", () => {
    let val = parseInt(counter.innerHTML);
    val--;
    counter.innerHTML = val;
})

reset.addEventListener("click", () => {
    counter.innerHTML = 0;
})