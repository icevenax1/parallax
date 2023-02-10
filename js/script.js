window.addEventListener('scroll', e =>{
  document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method  
  /*переменная css интерпалируем чтобы код был целостный */

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
  })
})