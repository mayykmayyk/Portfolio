const fade = document.querySelectorAll('.fade-in');
const options = { 
    threshold: .13,
    rootMargin: "0px 0px -400px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
options);

const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");
const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
 };
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            header.classList.add('appear');
        } else {
            header.classList.remove('appear');
        }
    })
}, sectionOneOptions);



fade.forEach(fade =>{
    appearOnScroll.observe(fade);
})
sectionOneObserver.observe(sectionOne);



