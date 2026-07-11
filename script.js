// ===============================
// CRIME 24X7 OFFICIAL SCRIPT
// ===============================

// Loader
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        if(loader){
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }

    },2000);

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Reveal Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// Navbar Background

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.85)";
header.style.backdropFilter="blur(15px)";

}else{

header.style.background="rgba(0,0,0,.35)";
header.style.backdropFilter="blur(10px)";

}

});

// Floating Book Animation

const book=document.querySelector(".book img");

if(book){

let angle=0;

setInterval(()=>{

angle+=0.03;

book.style.transform=
`translateY(${Math.sin(angle)*8}px)
rotateY(${Math.sin(angle)*8}deg)`;

},25);

}

// Hero Parallax

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

hero.style.backgroundPosition=`${50+x}% ${50+y}%`;

});

// Typing Effect

const heading=document.querySelector(".hero h2");

if(heading){

const text=heading.innerText;

heading.innerHTML="";

let i=0;

function type(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

setTimeout(type,1200);

}

// Button Hover Glow

document.querySelectorAll(".buy,.buy-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 40px rgba(214,0,28,.8)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 20px rgba(214,0,28,.4)";

});

});

// Scroll Progress Bar

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.background="#d6001c";
progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

// Console Message 😎

console.log("%cCRIME 24X7","font-size:32px;color:#d6001c;font-weight:bold;");
console.log("Official Website by K. TRIVEDI");
