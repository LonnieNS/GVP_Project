const burger = document.querySelector(".burger-btn");
const navUL = document.querySelector(".nav-ul");
const bars = document.querySelectorAll(".bar"); 

burger.addEventListener('click', () => { 
    navUL.classList.toggle('show'); 

    bars.forEach(element => { 
	element.classList.toggle('active');
});

});

navUL.addEventListener('click', () => {
    navUL.classList.remove('show');

    bars.forEach(element => { 
        element.classList.remove('active');
    });

});


const gallerycontainer = document.querySelector(".gallery-container");
const galleryimg = document.querySelectorAll(".gallery-img");
const offclick = document.querySelector(".sneaky-off-click"); // 

galleryimg.forEach(element => {
    element.addEventListener('click', event => {
        element.classList.toggle('zoom');
        offclick.classList.add('show');
    });
});

offclick.addEventListener('click', () => {
    offclick.classList.remove('show');
    galleryimg.forEach(element => {
        element.classList.remove('zoom');
    })
});
