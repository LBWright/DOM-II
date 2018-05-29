const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br/> Is <br/> Awesome",
    "button": "Click me, Calum!",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll('nav a')
navBar[0].innerHTML = siteContent.nav["nav-item-1"];
navBar[1].innerHTML = siteContent.nav["nav-item-2"];
navBar[2].innerHTML = siteContent.nav["nav-item-3"];
navBar[3].innerHTML = siteContent.nav["nav-item-4"];
navBar[4].innerHTML = siteContent.nav["nav-item-5"];

document.querySelector(".cta .cta-text h1").innerHTML = siteContent.cta.h1;
document.querySelector(".cta .cta-text button").innerHTML = siteContent.cta.button;
document.querySelector("#cta-img").src = siteContent.cta["img-src"];

let topContent = document.querySelectorAll('.top-content .text-content')
let textHeading = document.querySelectorAll(".text-content h4");
let textContent = document.querySelectorAll(".text-content p");

textHeading[0].innerHTML = siteContent["main-content"]["features-h4"];
textHeading[1].innerHTML = siteContent["main-content"]["about-h4"];
textHeading[2].innerHTML = siteContent["main-content"]["services-h4"];
textHeading[3].innerHTML = siteContent["main-content"]["product-h4"];
textHeading[4].innerHTML = siteContent["main-content"]["vision-h4"];

textContent[0].innerHTML = siteContent["main-content"]["features-content"];
textContent[1].innerHTML = siteContent["main-content"]["about-content"];
textContent[2].innerHTML = siteContent["main-content"]["services-content"];
textContent[3].innerHTML = siteContent["main-content"]["product-content"];
textContent[4].innerHTML = siteContent["main-content"]["vision-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHeading = document.querySelector('.contact h4');
let contactContent = document.querySelectorAll('.contact p');

contactHeading.innerHTML = siteContent.contact["contact-h4"];


contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent.contact.phone;
contactContent[2].innerHTML = siteContent.contact.email;

document.querySelector('footer p').innerHTML = siteContent.footer.copyright;

//////////////////////////
//Adding event listeners//
//////////////////////////

window.addEventListener('scroll', (e)=>{
  document.querySelector(".cta .cta-text h1").innerHTML= 'YOU\'RE SCROLLING!!! I dare you to drag that image right there.';
})

document.querySelector("#cta-img").addEventListener('dragstart',(event)=>{
  document.querySelector(".cta .cta-text h1").innerHTML = "Hey! Let him go! Your mother's a cat!"
})
document.querySelector("#cta-img").addEventListener('dragend',(event)=>{
  document.querySelector(".cta .cta-text h1").innerHTML = "I knew you didn't have it in you."
})


document.querySelector('.cta .cta-text button').addEventListener('click', (event)=>{
  event.target.innerHTML = '<input id="theInput" placeholder="I\'m hilarious. Type stuff in here."/>';

  document.querySelector('#theInput').addEventListener('keydown', (event)=>{
    if (event.key === 'Backspace'){
      alert('Not even the backspace works!');
    }
    else{ 
      alert('Now you have a virus! Muahahaha!');
    }
  })
})

textHeading[0].addEventListener('mouseover', () => {
  alert('I bet there\'s a secret message logged into the console');
  console.log('Hey! Who are you to reveal my secrets!? You\'re mother was a pop-up add!');
})

midImg.addEventListener('mouseover', ()=> {
  textHeading[3].innerHTML = 'Hey! Who changed my heading? I better not get clicked next.'
})

textHeading[3].addEventListener('click', (event)=>{
  event.target.innerHTML = 'Hey! I said not to click me!'
})

document.getElementById('navbar').addEventListener('mouseover', (event)=> {
    for (let i = 0; i < navBar.length; i++){

      navBar[i].style.color = getRandomColor();
    }

})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}