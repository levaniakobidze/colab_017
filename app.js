const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

 hamBurger.addEventListener("click", () => {
     hamBurger.classList.toggle("visible");
    navMenu.classList.toggle("visible");

 })

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamBurger.classList.remove("visible");
    navMenu.classList.remove("visible");
    }))


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