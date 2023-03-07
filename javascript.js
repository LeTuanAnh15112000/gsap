// gsap.from('.header', {
//     duration: 1,
//     y: '-100%',
//     ease: 'bounce',
// })

// gsap.from('.link', {
//     duration: 1,
//     opacity: 0,
//     delay: 1,
//     stagger: .5,
// })

// gsap.from('.right', {
//     duration: 2,
//     x: '-100vw',
//     scale: 0,
//     delay: 1,
//     ease: 'slow'
// })

// gsap.from('.left', {
//     duration: 1,
//     delay: 1.5,
//     x: '-100%',
//     ease: 'slow'
// })
gsap.to('.footer', {
    duration: 1,
    y: 0,
    delay: 2.5,
    ease: 'slow',
    opacity: 1,
})
gsap.fromTo(".button",
    {
        opacity: 0,
        scale: 0,
        rotation: 1440,
    },
    {
        duration: 1,
        delay: 3,
        opacity: 1,
        scale: 1,
        rotation: 0
    }
);

// const obj = { x: 0 };
// gsap.to(obj, {
//     duration: 2,
//     x: 100,
//     onUpdate: ()=>{
//         console.log(obj.x)
//     }
// })

// how to use time line (Bao gồm nhiều hiệu ứng hoặc dòng thời gian)
const timeline = gsap.timeline({ defaults: { duration: 1 } });
// const timeline = gsap.timeline({defaults: {duration: 1}}); có thể viết trc như này
timeline
    .from('.header', { y: '-100%', ease: 'bounce', })
    .from('.link', { opacity: 0, stagger: .5, }, 1) //cach viet delay
// .from('.link', { opacity: 0, stagger: .5,}, '<.5') //cach viet delay

// reverse
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    gsap.to(".button",
    {
        opacity: 0,
        scale: 0,
        rotation: 1440,
    }
);
})

gsap.registerPlugin(ScrollTrigger);

gsap.to('.test', {
    x: 700,
    duration: 3,
    deplay: 4,
    scrollTrigger: {
        trigger: ".test", 
        start: 700
    }
})