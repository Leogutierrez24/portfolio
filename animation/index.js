// animación show-hide navbar
let oldScrollPosition = window.pageYOffset;

const showHideNav = () => {
    let newScrollPosition = window.pageYOffset;
    if(oldScrollPosition < newScrollPosition){
        navBar.classList.add("hideNav");
    } else {
        navBar.classList.remove("hideNav");
    }
    oldScrollPosition = newScrollPosition;
}

window.onscroll = showHideNav;

// hide - show mobile menu
mobileMenuBtn.onclick = openMenu;
menuCloseBtn.onclick = closeMenu;

for(let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', closeMenu);
}

function closeMenu (){
    navBar.classList.remove('hide-nav-mobile');
    mobileMenu.classList.remove('slide-menu');
    mobileBackground.classList.remove('show-background');
}

function openMenu (){
    navBar.classList.add('hide-nav-mobile');
    mobileMenu.classList.add('slide-menu');
    mobileBackground.classList.add('show-background');
}
