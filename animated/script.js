//select the custom cursor and cursor blur elements
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(trace){
    crsr.style.left = trace.x +"px"
    crsr.style.top = trace.y +"px"
    blur.style.left = trace.x - 150 +"px"
    blur.style.top = trace.y - 150 + "px"
})
//navbar
gsap.to("#navbar",{
    height:"100px",
    backgroundColor: " #ffab04d5",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})
//scrolling black screen the main div
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:2,
    }
})
//main page1 h1 animation
gsap.from("h1",{
    opacity:0,
    color:"black",
    y:-50,
    duration:1.5,
    delay:0.5,
    // repeat:-1,
    // yoyo:true,
})
//h3 nad p animation
gsap.from("#page1 h3,#para",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:1,
    rotate:360,
    y:1000,
})
//image animation
gsap.from("img",{
    opacity:0,
    duration:3,
    y: -50,
    scrollTrigger:{
        trigger:"img",
        scroller:"body",
        start:"top -50%",
        // markers:true,
    }
})
// var timekl = gsap.timeline()
// timekl.from("img",{
//     y:-20,
//     opacity:0,
//     duration:1,
//     delay:0.3
// })
// timekl.from("#header",{
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     delay: 0.3,
//     stagger: 1
// });
