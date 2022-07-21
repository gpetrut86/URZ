const buttonTaskbar = document.querySelector('.taskbar_btn');
const buttonGraphics = document.querySelector('.taskbar_btn path');
const windowPc = document.querySelector('#window');
var isWindowOpen = true;

buttonTaskbar.addEventListener('click', (event) => {
    event.preventDefault();
    buttonGraphics.classList.toggle('active');

    if (isWindowOpen) {
        gsap.to(windowPc, { autoAlpha: 0, transform: "scale(0)" })
        isWindowOpen = false;
    } else {
        gsap.set(windowPc, { autoAlpha: 1, transform: "scale(1)" })
        gsap.from(windowPc, { autoAlpha: 0, transform: "scale(0)" })
        isWindowOpen = true;
    }
});


window.addEventListener("load", () => {

    const TLPC = gsap.timeline();

    TLPC
        .from("#monitor", { y: "100vh" })
        .from("#keyboards", { y: "100vh" }, "<")
        .from(".logo-img", { y: "-100%" }, "<")
        .from("#taskbar", { autoAlpha: 0, y: 20 })
        .from("#window", { autoAlpha: 0, transform: "scale(0)" })
        .from(".navbar-brand", { y: -200, duration: 2, ease: "Bounce.easeOut" }, "<")

        .from(".nav-link", { y: -200, duration: 2, ease: "Bounce.easeOut", stagger: { each: .1 } }, "-=80%")

        .from("#coffe_cup", { x: "50vw", duration: 1.5, ease: "Circ.easeOut" }, "-=100%")

        .from("#smoke", {
            autoAlpha: 0, y: 10, repeat: -1, repeatDelay: 1.4, ease: "power2.inOut", stagger: {
                each: 0.2,

            }
        })
        .set("#smoke", { autoAlpha: 1, y: 0 },)

        .to("#smoke", {
            autoAlpha: 0, y: -10, repeat: -1, repeatDelay: 1.4, ease: "power2.inOut", stagger: {
                each: 0.2,
                from: "end"

            }
        })






})