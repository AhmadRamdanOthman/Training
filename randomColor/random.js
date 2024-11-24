let hexarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];


for(let i =0; i<6; i++){
    colorParts.push(hexarray[Math.floor(Math.random() * hexarray.length)]);
};
let finalParts = `#${colorParts.join("")}`;
document.body.append(finalParts);
document.body.style.backgroundColor = finalParts;
