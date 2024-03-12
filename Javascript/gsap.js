function gsapAnimation(){
    gsap.from("main-left",{
        x: -1000,
        duration: 2
    })
    gsap.from("main-right img",{
        x: 500,
        y: 500,
        duration: 2
    })
    gsap.from(".navigation",{
        y: -70,
        duration: 1.5,
        opacity:0.5,
        stagger: .2,
    })
    gsap.from(".logo",{
        y: -70,
        duration: 2,
        opacity:0.5,
        stagger: .3,
    })
}

export default gsapAnimation