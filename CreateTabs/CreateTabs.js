let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabs.forEach((ele) => {
    ele.addEventListener("click", function(){
        tabs.forEach((ele) => {
            ele.classList.remove("active");
        });
        this.classList.add("active");
        divs.forEach((div)=>{
            div.style.display = "none"
        })
        document.querySelector(this.dataset.cont).style.display = "block"
    });
});

