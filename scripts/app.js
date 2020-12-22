
            
const images = document.querySelectorAll('.anim');
//const contents = document.querySelectorAll('.content');

const options={
    root:null,
    threhold:0,
    rootMargin: "2000px"
};

observer = new IntersectionObserver((entries,observer) => {

    entries.forEach(entry => {

        console.log(entry);

        if(entry.isIntersecting){
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else{
            entry.target.style.animation = 'none';
        }
        // if(entry.intersectionRatio > 0) {
        //     entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        // }
        // else {
        //     entry.target.style.animation = 'none';
        // }
    })

},options);

images.forEach(image => {
    observer.observe(image)
});

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

const t1=gsap.timeline({deafults:{ease: "power1.out"} } );
t1.to('.text',{y:"0%",duration:1 , stagger:0.25});
t1.to('.slider' , {y: "-100%",duration:1.5 , delay:0.5});
t1.to('.intro',{y:"-100%", duraton:1} ,"-=1");
t1.fromTo('nav',{opacity:0},{opacity: 1, duration:1});

navSlide();

