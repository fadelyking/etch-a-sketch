const pad = document.querySelector(".container");
let size = 2;

function generateGrid(size) {
	for (let i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.classList.add("grid-row");

		for (let j = 0; j < size; j++) {
			const widthHeight = 960 / size;
			const square = document.createElement("div");
			square.classList.add("grid-square");
			square.style.width = `${widthHeight}px`;
			square.style.height = `${widthHeight}px`;
			row.appendChild(square);
			square.addEventListener("mouseover", (e) => {
				e.target.style.background = "blue";
			});
			const btn = document.querySelector("button");
			btn.addEventListener("click", (e) => {
				row.remove();
				square.remove();
			});
		}
		pad.appendChild(row);
	}
}
generateGrid(size);

const button = document.querySelector(".reset");
button.addEventListener("click", () => {
	size = 0;
	size = prompt("Please write down a number from 2 to 64");
	if (isNaN(size) || size <= 1 || size > 64) {
		alert("ERROR");
		return generateGrid(2);
	} else {
		generateGrid(size);
	}
});

/* const pad = document.querySelector(".container");
const square = document.createElement("div");
square.classList.add("square");

pad.style.width = "600px";
pad.style.height = "600px";

square.style.height = `${500 / size}px`;
square.style.width = `${500 / size}px`;
pad.appendChild(square); */
