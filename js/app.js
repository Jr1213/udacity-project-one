// globale vars
const fargment = new DocumentFragment();
const list = document.querySelectorAll('.section');
const nav = document.getElementById('nav-bar');


list.forEach(element => {
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.textContent = element.getAttribute('data-nav');
    li.appendChild(link);
    fargment.appendChild(li);
    nav.appendChild(fargment);
});
const links = document.querySelectorAll('nav ul li a');
links.forEach(element => {
    element.addEventListener('click',()=>{
        addActivClass(element);
        moveToScetion(element);
    })
});
// getting any nav links with class active-link then removing it
// adding class active-link to the element was clicked
function addActivClass(anchor){
    const rmActiveLinks = document.querySelectorAll('.active-link');
    rmActiveLinks.forEach(itme =>{
        itme.classList.remove("active-link")
    });

        anchor.classList.add("active-link");

}

// getting the txet from the link then use it to find the section with data Attribute == to link tex
// moving smothly to the sction we get from first step
function moveToScetion(anchor){
    const elementText = anchor.innerHTML;
    const navSection = document.querySelector(`[data-nav = "${elementText}"]`);
    navSection.scrollIntoView({behavior:'smooth'})
    addActiveSection(navSection);
}
//getting all the section with class active-section then remove it for every element
//adding active class to the section we scrolled to 
function addActiveSection(section){
    rmActiveSection = document.querySelectorAll(".active-section");
    rmActiveSection.forEach(element => {
        element.classList.remove("active-section")
    });
    section.classList.add("active-section");
}

window.addEventListener("scroll",()=>{
    
})