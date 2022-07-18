const burger = document.getElementById('burger'),
    navArray= document.getElementById('nav-list');
window.addEventListener('load', MobileNav);


function OpenNav() {
    navArray.style.display === 'none' ? navArray.style.display = 'flex' : navArray.style.display = 'none';
}


function MobileNav () {
    if (window.getComputedStyle(burger).display === 'none') {
        navArray.style.display = 'flex';
    } else {
        navArray.style.display = 'none';
        navArray.style.flexDirection = 'column';
        navArray.style.height = 4 * navArray.children.length + 'rem';
        burger.addEventListener('click', OpenNav);
    }
}
