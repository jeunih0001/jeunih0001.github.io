const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})


const navToggler = document.querySelector('#navToggler')
const navMenu = document.querySelector('#navMenu')
const body = document.querySelector('body')

const elements = document.querySelectorAll('.hidden')
elements.forEach((el)=>observer.observe(el))

navToggler.addEventListener('click', ()=>{
    navMenu.classList.add('active')
    console.log(navMenu,navToggler)
})

body.addEventListener('click', (e)=>{
    if (e.target.id !== 'navToggler')
        navMenu.classList.remove('active')

})