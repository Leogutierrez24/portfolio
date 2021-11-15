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

// animación show-hide texto en el item proyecto

firstProject.onmouseover = (() => {
    firstText.classList.add("hide");
    firstLink.classList.add("show");
});
firstProject.onmouseleave = (() => {
    firstText.classList.remove("hide");
    firstLink.classList.remove("show");
});

secondProject.onmouseover = (() => {
    secondText.classList.add("hide");
    secondLink.classList.add("show");
});
secondProject.onmouseleave = (() => {
    secondText.classList.remove("hide");
    secondLink.classList.remove("show");
});

thirdProject.onmouseover = (() => {
    thirdText.classList.add("hide");
    thirdLink.classList.add("show");
});
thirdProject.onmouseleave = (() => {
    thirdText.classList.remove("hide");
    thirdLink.classList.remove("show");
});

