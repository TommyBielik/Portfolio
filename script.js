const navContainers = document.querySelectorAll(`.nav-ball-container`);

navContainers.forEach(setVisible);

// LITTLE NAV BALLS ANIMATION
function setVisible(container) {

    const ball = container.querySelector(`.ball`);
    const btn = container.querySelector(`.nav-btn`);

    btn.addEventListener("mouseover", function() {
        Object.assign(ball.style, {
            backgroundColor: `white`,
            opacity: `1`,
            animation: `lightFlickering 0.5s infinite alternate`,
            transform: `translateY(-10px)`
        });
    });


    btn.addEventListener("mouseleave", function() {
        ball.style.animation = `lightFlickering 2s infinite`;
        ball.style.opacity = `0`;
        ball.style.transform = `translateY(10px)`;
    });
};

/* SET SECTIONS VISIBLE */
const sections = document.querySelectorAll(`section`);
for (let section of sections) {
    section.style.opacity = `1`;
}

/* WAIT FUNCTION */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ARROW BALL ANIMATION */
const arrows = document.querySelectorAll(`#arrow`);
for (let arrow of arrows) {
    arrow.addEventListener(`click`, async function(event) {
        event.preventDefault();

        const ball = document.querySelector(`.big-ball`);
        const sectionId = arrow.getAttribute(`href`).replace(`#`, ``);

        document.getElementById(sectionId).scrollIntoView();
        
        await wait(500);
        const scrollPosition = window.scrollY;
        
        ball.style.opacity = `1`;
        ball.style.transform = `translateY(${scrollPosition}px)`;

        await wait(500);
        ball.style.opacity = `0`;
    });
}