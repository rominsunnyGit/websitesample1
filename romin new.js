/* =====================================
   FLOATING BUBBLES
===================================== */

const bubblesContainer = document.getElementById("bubbles");

if (bubblesContainer) {

    for (let i = 0; i < 40; i++) {

        const bubble = document.createElement("div");

        bubble.classList.add("bubble");

        const size = Math.random() * 80 + 20;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        bubble.style.left = `${Math.random() * 100}%`;

        bubble.style.animationDuration =
            `${10 + Math.random() * 20}s`;

        bubble.style.animationDelay =
            `${Math.random() * 5}s`;

        bubblesContainer.appendChild(bubble);
    }
}

/* =====================================
   TYPING ANIMATION
===================================== */

const roles = [

    "Customer Success Manager",

    "Business Development Leader",

    "Community Builder",

    "Growth Strategist",

    "AI-Powered Marketing Enthusiast",

    "Startup Growth Professional"

];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
    document.getElementById("typing");

function typeText() {

    if (!typingElement) return;

    if (
        charIndex <
        roles[roleIndex].length
    ) {

        typingElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 80);

    } else {

        setTimeout(deleteText, 1500);
    }
}

function deleteText() {

    if (
        typingElement.textContent.length > 0
    ) {

        typingElement.textContent =
            typingElement.textContent.slice(0, -1);

        setTimeout(deleteText, 40);

    } else {

        roleIndex =
            (roleIndex + 1) % roles.length;

        charIndex = 0;

        setTimeout(typeText, 300);
    }
}

typeText();

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar =
    document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0,0,0,0.75)";

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,229,255,.15)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,.2)";

        navbar.style.boxShadow =
            "none";
    }
});

/* =====================================
   SMOOTH SCROLL
===================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});

/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements =
document.querySelectorAll(
    ".card, section h2, .timeline-item"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

},
{
threshold:0.15
}

);

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(50px)";

el.style.transition=
"all 0.8s ease";

revealObserver.observe(el);

});

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText = "0";

const updateCounter = () => {

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});

/* =====================================
   ACTIVE MENU HIGHLIGHT
===================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== `#${current}`
){

link.classList.add("active");

}

});

});

/* =====================================
   MOUSE GLOW EFFECT
===================================== */

const glow =
document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);

/* =====================================
   PARALLAX HERO EFFECT
===================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", ()=>{

const offset =
window.pageYOffset;

if(hero){

hero.style.transform =
`translateY(${offset * 0.15}px)`;

}

});

/* =====================================
   LOADING ANIMATION
===================================== */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

}
);