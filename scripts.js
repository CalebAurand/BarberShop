const mobileNav = document.getElementByID('mobileNavigation');
const mobileNavList = document.getElementById('mobileNavList');

function openMobileNav() {
    if (mobileNav.display.value == 'none'){
        break;
    }else {
        mobileNavList.display = 'true';
    }
}