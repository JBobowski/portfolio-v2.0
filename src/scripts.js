const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const navLinkAbout = document.getElementById('nav-link-about')
const navLinkProj = document.getElementById('nav-link-proj')
const navLinkCont = document.getElementById('nav-link-cont')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
navLinkAbout.addEventListener('click', toggleButton)
navLinkProj.addEventListener('click', toggleButton)
navLinkCont.addEventListener('click', toggleButton)