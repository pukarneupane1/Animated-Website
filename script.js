function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.2
})

tl.from(".center-part1 h1",{
    x: -200,
    opacity: 0,
    duration : 0.5,


} ,"-=0.5")
tl.from(".center-part1 p",{
    x: -100,
    opacity: 0,
    duration : 0.4,
})
tl.from(".center-part1 button",{
    opacity: 0,
    duration : 0.4,
})
tl.from(".center-part2 img",{
    x: 200,
    opacity: 0,
    duration : 0.4
} , "-=0.3")

tl.from(".section1bottom img",{
    y:30,
    opacity: 0,
    duration : 0.4,
    stagger: 0.15
})

}

function page2Animation(){
    
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 75%",
        scrub: 2,
        end:"top 0"
     }
})

tl2.from(".services ",{
    y: 30,
     opacity: 0,
     duration:0.5

})
tl2.from(".elem.white.left ",{
    x: -300,
     opacity: 0,
    duration: 1
},"a")
tl2.from(".elem.black.right ",{
    x: 300,
     opacity: 0,
    duration: 1
},"a")
tl2.from(".elem.black.left ",{
    x: -300,
     opacity: 0,
    duration: 1
},"b")
tl2.from(".elem.white.right ",{
    x: 300,
     opacity: 0,
    duration: 1
},"b")


}

page1Animation();
page2Animation();