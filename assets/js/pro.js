document.querySelector(".prof").addEventListener("click",function(){
    document.querySelector(".prof1").classList.add("open")
})

document.querySelector(".contact").addEventListener("click",function(){
    document.querySelector(".contact1").classList.add("open")
    document.querySelector(".prof1").classList.remove("open")
})