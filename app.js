const body = document.querySelector("#body");
const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("visible");
    navMenu.classList.toggle("visible");
    body.classList.toggle("shadow");
document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamBurger.classList.remove("visible");
    navMenu.classList.remove("visible");
    }))
})

// document.querySelectorAll(".nav-link").forEach(n => n.
// addEventListener("click", () => {
//     hamBurger.classList.remove("visible");
//     navMenu.classList.remove("visible");
//     }))
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');
    
//     hamburger.addEventListener('click', () => {
//       if (navMenu.classList.contains('visible')) {
//         navMenu.classList.remove('visible');
//       } else {
//         navMenu.classList.add('visible');
//       }
//     });

/*pricing js*/
const switchButton = document.querySelector('#toggleAll');

switchButton.addEventListener('click', ()=> {
    const yearly = document.getElementById('yearly');
    const monthly = document.getElementById('monthly');
    const basicPrice = document.getElementById('basic-price');
    const proPrice = document.getElementById('pro-price');
    const businessPrice = document.getElementById('business-price');
    if(switchButton.checked){
        yearly.style.opacity = 'unset';
        yearly.style.mixBlendMode ='unset'
        monthly.style.opacity = '0.25';
        monthly.style.mixBlendMode = 'normal';
        basicPrice.innerHTML = '$190.00';
        proPrice.innerHTML = '$390.00';
        businessPrice.innerHTML = '$990.00';
    }else{
        yearly.style.opacity = '0.25';
        yearly.style.mixBlendMode ='normal';
        monthly.style.opacity = 'unset';
        monthly.style.mixBlendMode = 'unset';
        basicPrice.innerHTML = '$19.00';
        proPrice.innerHTML = '$39.00';
        businessPrice.innerHTML = '$90.00';
    }
})