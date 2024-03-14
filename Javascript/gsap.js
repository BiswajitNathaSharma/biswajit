function gsapAnimation(){
    gsap.from("main-left p",{
        x: -600,
        duration: 2,
        stagger:1
    })
    gsap.from("main-left h3",{
        x: -1200,
        duration: 2,
        stagger:1
    })
    gsap.from("main-left h1",{
        x: 1200,
        duration: 2,
        stagger:1
    })
    gsap.from(".social-icons ul li",{
        y:70,
        duration: .4,
        stagger:.3,
    })
    gsap.from(".button-section .main-btn",{
        opacity:0,
        y: -900,
        duration: 1,
    })
    
    
    gsap.from("main-right img",{
        x: 600,
        y: 500,
        duration: 2,
    })
    gsap.from(".navigation, .logo",{
        scale:0,
        opacity:0,
        duration: 1.5,
        stagger:.2
    })

    // home section animation added 

    // skill section animation 
    gsap.from(".skills-girl",{
        scale: 1,
        x: -70,
        duration: 1,
        scrollTrigger:{
            trigger:".skills-girl",
            scroller:"body",
            scrub:3,
        }
    })
    gsap.from(".skills-girl2",{
        x: -70,
        duration: 1,
        scrollTrigger:{
            trigger:".skills-girl",
            scroller:"body",
            scrub:3,
        }
    })
    gsap.from(".indivisual-skills",{
        scale: 0,
        duration: 1,
        opacity: 0.6,
        stagger: .3,
        scrollTrigger:{
            trigger:"#Skills",
            scroller:"body",
            scrub: 2,
            markers:true,
            end:"top 20%"
        }
    })

    // skill section ended 


    // project animation started 
    gsap.from("#card-container",{
        scale: 0.9,
        opacity:0.7,
        duration: 0.5,
        stagger:0.3,
        scrollTrigger:{
            trigger:".project-heading",
            scroller:"body",
            scrub: 1.5,
        }
    })
    // project animation ended

    // about animation started 

    gsap.from(".left-about",{
        scale: 0.5,
        opacity:0.9,
        duration: 0.5,
        scrollTrigger:{
            trigger:".about-heading",
            scroller:"body",
            scrub: 1.5,
        }
    })
    gsap.from(".contact-heading img",{
        x: -200,
        duration: 0.5,
        scrollTrigger:{
            trigger:".contact-heading",
            scroller:"body",
            scrub: 2.5,
        }
    })
    gsap.from(".left-contact img",{
        scale: 0,
        opacity:0.5,
        duration: 0.5,
        scrollTrigger:{
            trigger:".contact-heading",
            scroller:"body",
            scrub: 1.5,
        }
    })
    gsap.from(".right-contact form",{
        x: 400,
        opacity:0.5,
        duration: 1,
        scrollTrigger:{
            trigger:".contact-heading",
            scroller:"body",
        }
    })
}

export default gsapAnimation