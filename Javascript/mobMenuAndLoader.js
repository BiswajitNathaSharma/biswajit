import gsapAnimation from "./gsap.js"

let isMobile = window.matchMedia("(max-width: 700px)").matches;
function loaderOff() {

if (isMobile) {
    document.querySelector("#cart-messaage").innerHTML = `Use large screen for better experiance &nbsp; :&nbsp;)`;
}
    document.body.style.overflow = 'hidden';
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'visible';
        if (loader.style.display === 'none') {
            gsapAnimation()
        }
        
    }, 1000);
}

function mobileMenuDesign() {
    const overlay = document.querySelector('.overlay');
    const checkbox = document.querySelector('#menu');

    const menu = document.querySelectorAll('.menu');
    menu.forEach((element) => {
        let elechild = element.children;
        for (let i = 0; i < elechild.length; i++) {
            elechild[i].addEventListener('click', () => {
                checkbox.checked = false;
                overlay.style.display = 'none';
            })
        }
    });
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    });
}

export {loaderOff, mobileMenuDesign}