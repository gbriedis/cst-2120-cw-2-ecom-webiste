var anim = gsap.timeline({
    defaults: { duration: 0.4, ease: 'none', opacity: 0 }
});

var anim2 = gsap.timeline({
    defaults: { duration: 1, delay: 2 }
})

anim.from('.hero__header', { x: -100 }, '+=0.2')
    .from('.hero__img', { y:30 })
    .from('.hero__img__purple', { y:20 }, '+=0.2')
    .from('.hero__img__red', { y:20 }, '-=0.2')
    .from('.hero__img__orange', { y:20 }, '-=0.1')
    .from('.hero__img__yellow', { y:20 }, '-=0.1') 
    .from('.hero__img__ps5', { y:-80 }, '-=0.2')

anim2.to('.hero__img', {
    x: 'random(-20, 20)',
    y: 'random(-20, 20)',
    repeat: -1,
    yoyo: true,
    repeatRefresh: true
})

