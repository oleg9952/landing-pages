export const mobileNav = () => {
    // ----- HTMLElements -----
    const openMobileNav = document.querySelector('.desktopnav__content-mobilebtn')
    const closeMobileNav = document.querySelector('.mobilenav__close-btn')
    const mobileNav = document.querySelector('.mobilenav')
    const navItems = document.querySelectorAll('.mobilenav__list-li')

    // ----- EVENTS -----
    openMobileNav.addEventListener('click', () => {
        mobileNav.classList.add('active')
        setTimeout(() => {
            navItems.forEach(item => item.classList.add('active'))
        }, 500);
    })
    closeMobileNav.addEventListener('click', () => {
        navItems.forEach(item => item.classList.remove('active'))
        setTimeout(() => {
            mobileNav.classList.remove('active')
        }, 700);
    })
}