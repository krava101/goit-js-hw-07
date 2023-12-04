const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const fn = (event) => {
    input.value.replace(/\s/g, "") === "" ? output.textContent = "Anonymous" : output.textContent = event.currentTarget.value;
}

input.addEventListener("input", fn);
