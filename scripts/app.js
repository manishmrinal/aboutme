
            
const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

images.forEach(image => {
    observer.observe(image)
})

const navSlide =() =>{

    const burger = document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    
    navLinks.forEach((link,index)=>{
        console.log(index);
        if(link.style.animation){
            link.style.animation=''
        }
        else{

               link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 1 }s`;
        }


    });

});

}

navSlide();

