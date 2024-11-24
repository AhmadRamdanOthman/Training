let spans = document.querySelectorAll(".progress span");
let section = document.querySelector(".skills")

window.onscroll = function(){
    if(window.scrollY >= section.offsetTop -300){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width
        })
    }
}