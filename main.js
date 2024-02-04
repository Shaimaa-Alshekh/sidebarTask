document.querySelector(".add").onclick=function(){
    document.querySelector(".rightside").classList.toggle("display");

    document.querySelector("body").classList.toggle("overlay");

}

document.querySelector(".exit").onclick=function(){
    document.querySelector(".rightside").classList.remove("display");
    document.querySelector("body").classList.remove("overlay");

}
console.log("hello");