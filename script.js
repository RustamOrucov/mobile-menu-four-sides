document.addEventListener('mousemove', function(event) {
    const navbar=document.querySelector('.navbar-top') 
    const navbarLeft=document.querySelector('.navbar-left') 
    const navbarBottom=document.querySelector('.navbar-bottom') 
    const navbarRight=document.querySelector('.navbar-right') 

    if (event.clientY < 60) {
        navbar.classList.add('rotate');
    } else {
        navbar.classList.remove('rotate');
    }
    // left
    if (event.clientX < 120 && !navbar.classList.contains('rotate') && !navbarBottom.classList.contains('rotate-bottom')) {
        
        navbarLeft.classList.add('rotate-left')
    } else {
        navbarLeft.classList.remove('rotate-left');
    }
    // bottom
    if (event.clientY > 520) {
       
        navbarBottom.classList.add('rotate-bottom');
    } else {
        navbarBottom.classList.remove('rotate-bottom');
    }
    // right
    if (event.clientX > 1100 && !navbar.classList.contains('rotate') && !navbarBottom.classList.contains('rotate-bottom')) {
        console.log(event.clientX);
        navbarRight.classList.add('rotate-right');
    } else {
        navbarRight.classList.remove('rotate-right');
    }
});





