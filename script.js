// ======================================
// CRIME 24X7 OFFICIAL WEBSITE
// SCRIPT
// ======================================

// ============================
// LOADER
// ============================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 1800);

});

// ============================
// SCROLL PROGRESS BAR
// ============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / scrollHeight) * 100;

progressBar.style.width =
progress + "%";

});

// ============================
// HEADER EFFECT
// ============================

const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});

// ============================
// REVEAL ANIMATION
// ============================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.2
});

document.querySelectorAll(

".book-section,.story,.author,.reviews,.cta"

).forEach(section=>{

section.classList.add("reveal");

observer.observe(section);

});

// ============================
// CURSOR GLOW
// ============================

const glow =
document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX+"px";

glow.style.top = e.clientY+"px";

});
// ======================================
// HERO PARALLAX
// ======================================

const hero = document.querySelector(".hero");
const cover = document.querySelector(".book-cover");

if(hero && cover){

hero.addEventListener("mousemove",(e)=>{

const x =
(window.innerWidth / 2 - e.clientX) / 40;

const y =
(window.innerHeight / 2 - e.clientY) / 40;

cover.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

hero.addEventListener("mouseleave",()=>{

cover.style.transform =
"rotateY(0deg) rotateX(0deg)";

});

}

// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

document.querySelectorAll(".btn-red,.btn-white").forEach(button=>{

button.addEventListener("click",function(e){

const circle =
document.createElement("span");

const size =
Math.max(this.offsetWidth,this.offsetHeight);

circle.style.width = size+"px";
circle.style.height = size+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.25)";
circle.style.pointerEvents="none";
circle.style.transform="scale(0)";
circle.style.animation="ripple .6s linear";

const rect =
this.getBoundingClientRect();

circle.style.left =
(e.clientX-rect.left-size/2)+"px";

circle.style.top =
(e.clientY-rect.top-size/2)+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ======================================
// CREATE RIPPLE STYLE
// ======================================

const rippleStyle =
document.createElement("style");

rippleStyle.innerHTML = `

.btn-red,
.btn-white{

position:relative;
overflow:hidden;

}

@keyframes ripple{

to{

transform:scale(4);
opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

// ======================================
// FLOATING PARTICLES
// ======================================

for(let i=0;i<20;i++){

const particle =
document.createElement("div");

particle.className="particle";

particle.style.left =
Math.random()*100+"vw";

particle.style.animationDuration =
(6+Math.random()*8)+"s";

particle.style.animationDelay =
Math.random()*5+"s";

document.body.appendChild(particle);

}

const particleCSS =
document.createElement("style");

particleCSS.innerHTML=`

.particle{

position:fixed;

bottom:-20px;

width:3px;

height:3px;

background:rgba(193,18,31,.5);

border-radius:50%;

pointer-events:none;

animation:particleMove linear infinite;

z-index:1;

}

@keyframes particleMove{

0%{

transform:
translateY(0)
scale(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:
translateY(-120vh)
scale(1.8);

opacity:0;

}

}

`;

document.head.appendChild(particleCSS);

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target =
document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(
"%cCRIME 24X7",
"color:#C1121F;font-size:28px;font-weight:bold;"
);

console.log(
"Official Website by K. TRIVEDI"
);
