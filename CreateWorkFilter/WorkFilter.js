let switcherLis  = document.querySelectorAll(".switcher li");
let imgs  = document.querySelectorAll(".gallery img");

switcherLis.forEach((ele) => {
    ele.addEventListener("click", function() {
        switcherLis.forEach((ele) => {
            ele.classList.remove("active");
        });
        this.classList.add("active");
        imgs.forEach((img)=>{
            img.style.display = "none"
        });
        document.querySelectorAll(this.dataset.cat).forEach((ele)=>{
            ele.style.display = "block"
        });
    });
});









/* switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
};
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}  */






























/* switcherLis.forEach((li)=>{
    li.addEventListener("click", removeActive)
    li.addEventListener("click",manageImage)
})
    function removeActive() {
        switcherLis.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
        });
    }
    function manageImage(){
        imgs.forEach((img)=>{
            img.style.display = "none"
        })
        document.querySelectorAll(this.dataset.cat).forEach((el)=>{
            el.style.display = "block";
        })
    }  */
