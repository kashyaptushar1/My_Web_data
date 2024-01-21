var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4 , #nav button",{
    y:-100,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.2
})

tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3

})

tl.from("#main>img",{
    scale:0.5,
    opacity:0,
    stagger:0.3
})