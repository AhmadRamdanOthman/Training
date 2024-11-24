let input = document.querySelector("input");
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let maxLength = input.getAttribute("maxlength");
count.innerHTML = maxLength
input.oninput = function(){
    count.innerHTML = maxLength - this.value.length
    if(count.innerHTML === "0"){
        count.classList.add("zero");
    }else{
        count.classList.remove("zero");
    }
    progress.style.width =` ${(this.value.length / maxLength) * 100}%` 
}