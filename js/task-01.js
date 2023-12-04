const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
for (const e of list.children) {
    console.log(`Category: ${e.firstElementChild.textContent}`);
    console.log(`Elements: ${e.querySelector("ul").children.length}`);
}