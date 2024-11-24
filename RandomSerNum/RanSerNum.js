let generate = document.querySelector(".generate");
let serial = document.querySelector(".serial");


//let RaNdomSerial = Math.floor(Math.random() * NumbersArray.length);

generate.onclick=function() {
    let Numbers = "123456789ABCDEFGHIJKLMNOPQRSTYXZ";
    let ChoosenSerials = "";
    let count = 10;
    for(let i = 0; i < count; i++){
        ChoosenSerials += Numbers[Math.floor(Math.random() * Numbers.length)];
    };
    serial.innerHTML =   ChoosenSerials

};

