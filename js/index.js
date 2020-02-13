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
    "h1": "DOM Is Awesome",
    "button": "Get Started",
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

let navList = document.querySelectorAll('a');

navList[0].setAttribute("class", ".nav1");
navList[0].innerText = "Service";
navList[1].setAttribute("class", ".nav2");
navList[1].innerText = "Products";
navList[2].setAttribute("class", ".nav3");
navList[2].innerText = "Vision";
navList[3].setAttribute("class", ".nav4");
navList[3].innerText = "Features";
navList[4].setAttribute("class", ".nav5" );
navList[4].innerText = "About";
navList[5].setAttribute("class", ".nav6");
navList[5].innerText = "Contact";




//top section with h1 and round image
let awesome = document.querySelector('h1');
awesome.textContent = siteContent['cta']['h1'];

let started = document.querySelector('button');
started.textContent = siteContent['cta']['button'];

let circle = document.getElementById('cta-img');
circle.setAttribute('src', siteContent['cta']['img-src']);


let features = document.querySelectorAll('h4');
features[0].textContent = siteContent['main-content']['features-h4'];
features[1].textContent = siteContent['main-content']['about-h4'];
features[2].textContent = siteContent['main-content']['services-h4'];
features[3].textContent = siteContent['main-content']['product-h4'];
features[4].textContent = siteContent['main-content']['vision-h4'];
features[5].textContent = siteContent['contact']['contact-h4'];

let para = document.querySelectorAll('p');
para[0].textContent = siteContent['main-content']['features-content'];
para[1].textContent = siteContent['main-content']['about-content'];
para[2].textContent = siteContent['main-content']['services-content'];
para[3].textContent = siteContent['main-content']['product-content'];
para[4].textContent = siteContent['main-content']['vision-content'];
// contact section p tags
para[5].textContent = siteContent['contact']['address'];
para[6].textContent = siteContent['contact']['phone'];
para[7].textContent = siteContent['contact']['email'];
// footer p tag (copyright)
para[8].textContent = siteContent['footer']['copyright'];

let rectangle = document.getElementById('middle-img');
rectangle.setAttribute('src', siteContent['main-content']['middle-img-src']);

//adding 2 new nav links
let thing1 = document.createElement('a');
thing1.setAttribute('href', '#');
thing1.textContent = 'Thing1';

let thing2 = document.createElement('a');
thing2.setAttribute('href', '#');
thing2.textContent = 'Thing2';

let lastPart = document.querySelector('nav');

lastPart.prepend(thing1);
lastPart.append(thing2);

//turning nav links green
let colors = document.querySelectorAll('a');
colors[0].style.color = 'green';
colors[1].style.color = 'green';
colors[2].style.color = 'green';
colors[3].style.color = 'green';
colors[4].style.color = 'green';
colors[5].style.color = 'green';
colors[6].style.color = 'green';
colors[7].style.color = 'green';






