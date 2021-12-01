document.querySelector(".hamburger-menu").addEventListener("click", ()=>{
    document.querySelector(".container")
    .classList.toggle("change");
    
    
})
// document.querySelector(".hamburger-menu").addEventListener("click", ()=>{
//      document.querySelector(".container").classList.toggle("change");
//     console.log("click");
//      });
    
// })
// let li = document.getElementsByClassName(".line");
// li.style.csstext = "transform:rotate:20deg";

document.querySelector("scroll-btn")
.addEventListener("click", ()=>{
    document.querySelector('html').style.scrollBehavior ="smooth";
    setTimeout(()=>{
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 500)
});

