 var tl = gsap.timeline();

tl.from("#nav",{
    opacity:0,
    delay:0.3
})
tl.from("#nav h1, #nav h4 , #nav h3 ",{
    y:-80,
    opacity:0,
    duration:2,
    
    stagger:0.2
})

tl.from("#left h1",{
    x:-800,
    stagger:0.5
}
)
tl.from("#right img",{
    scale:0.5,
    opacity:0,
})


gsap.from("#page2 .box",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // stagger:0.5,
        start:"tp 70%",
        scrub:true
    }
})