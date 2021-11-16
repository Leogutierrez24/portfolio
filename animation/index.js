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


