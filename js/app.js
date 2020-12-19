// globale vars
const fargment = new DocumentFragment(); 
const list = document.querySelectorAll('.section');
const nav = document.getElementById('nav-bar');

list.forEach(element => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = element.getAttribute('data-nav');
    //removing spaces to use the data-nav value as id for the nav link
    let idContent = (link.textContent).replace(/ +/g, "");
    link.setAttribute("id", idContent) 
    li.appendChild(link);
    fargment.appendChild(li);
    nav.appendChild(fargment);
});

const links = document.querySelectorAll('nav ul li a');
links.forEach(element => {
    element.addEventListener('click', () => {
        addActivClass(element);
        moveToScetion(element);
    })
});
// getting any nav links with class active-link then removing it
// adding class active-link to the element was clicked
function addActivClass(anchor) {
    const rmActiveLinks = document.querySelectorAll('.active-link');
    rmActiveLinks.forEach(itme => {
        itme.classList.remove("active-link")
    });

    anchor.classList.add("active-link");

}

// getting the txet from the link then use it to find the section with data Attribute == to link tex
// moving smothly to the sction we get from first step
function moveToScetion(anchor) {
    const elementText = anchor.innerHTML;
    const navSection = document.querySelector(`[data-nav = "${elementText}"]`);
    navSection.scrollIntoView({
        behavior: 'smooth'
    })
    addActiveSection(navSection);
}
//getting all the section with class active-section then remove it for every element
//adding active class to the section we scrolled to 
function addActiveSection(section) {
    rmActiveSection = document.querySelectorAll(".active-section");
    rmActiveSection.forEach(element => {
        element.classList.remove("active-section")
    });
    section.classList.add("active-section");
}

// observoble settion
const options = {
    threshold: 0.50,
}
const observe = new IntersectionObserver((sections) => {
    sections.forEach(section => {
        const oldSection = document.querySelector(".active-section");
        if (oldSection !== null) {
            const oldSection = document.querySelector(".active-section");
            oldSection.classList.remove('active-section')
        }
        //adding active section calss to the section in viewport
        const currntSection = section.target;
        currntSection.classList.add('active-section');
        const activeLinkId = currntSection.getAttribute("data-nav").replace(/ +/g, "");
        const activeLink = document.getElementById(activeLinkId)
        addActivClass(activeLink)
    });
}, options);
// trager the observer to every section in the pqge
list.forEach(item => {
    observe.observe(item)
})

// responiv menu
const navFargment = new DocumentFragment();
const div = document.createElement('div');
const ResponsiveNavbar = document.querySelector("#nav");
div.textContent = "+"
navFargment.appendChild(div);
ResponsiveNavbar.appendChild(navFargment); 
div.classList.add('menu');
div.addEventListener('click', ()=>{
    document.querySelector('#nav-bar').classList.toggle("active")
})