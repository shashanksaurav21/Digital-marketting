

//execute script after page load
window.onload = function digital_fn(){
    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener("click", function(event){
        collapse.classList.toggle("active")
    })  
}

//masonary.js

let grid = document.querySelector("#site-main .recent-work-area .images-flex")

let msnry = new Masonry(grid,{
    itemSelector:'.flex-item',
    columnWidth:100,
    gutter:100,
    fitWidth:true,
})