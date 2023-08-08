document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create 2 spans
    var parent = document.createElement("span")
    var child = document.createElement("span")

    //parent and child both sets their respective classes
    parent.classList.add("parent")
    child.classList.add("child")

    //span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML
    parent.appendChild(child)

    //elem replaces its value with parent name
    elem.innerHTML = ""
    elem.appendChild(parent)
})

function revealToSpan(){

}
revealToSpan()

var tl = gsap.timeline()

tl
.from(".child span", {
    x:100,
    stagger: .2,
    duration: 1.4,
    delay:2,
    ease: Power3.easeInOut
})
.to(".parent .child", {
    y:"-100",
    duration: 1,
    delay:1,
    ease: Circ.easeInOut
})
.to("#loader", {
    height:0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#green", {
    height:"100%",
    top:0,
    duration: 1,
    delay: -0.8,
    ease: Circ.easeInOut
})
.to("#green", {
    height:"0%",
    duration: 1,
    delay: -.4,
    ease: Circ.easeInOut
})
