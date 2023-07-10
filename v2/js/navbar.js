const navbarBtn = document.querySelector("#nav-icon-1")
const navbarBtnBaner = document.querySelector("#nav-icon-2")
const navbar = document.querySelector("#navbar-1")
const navbarBaner = document.querySelector("#navbar-2")
let screenWidth = window.innerWidth
let isNavbarOn = false

if (screenWidth < 1024){
    navbar.style.flexDirection = "column"
    navbarBaner.style.flexDirection = "column"
    if (!isNavbarOn){
        navbar.style.display = "none"
        navbarBaner.style.display = "none"
    }
}

function toggleNavbar() {
    if (!isNavbarOn) {
        navbarBtn.innerHTML = '<i class="bi bi-x-lg"></i>'
        navbarBtnBaner.innerHTML = '<i class="bi bi-x-lg"></i>'
        isNavbarOn = true
    } else {
        navbarBtn.innerHTML = '<i class="bi bi-list"></i>'
        navbarBtnBaner.innerHTML = '<i class="bi bi-list"></i>'
        isNavbarOn = false
    }
}

window.addEventListener('resize', () => {
    screenWidth = window.innerWidth
    console.log("Updated screen resolution width: " + screenWidth + "  isNavbarOn: " + isNavbarOn)
    if (screenWidth < 1024){
        navbar.style.flexDirection = "column"
        navbarBaner.style.flexDirection = "column"
        if (!isNavbarOn){
            navbar.style.display = "none"
            navbarBaner.style.display = "none"
        }
    } else {
        navbar.style.flexDirection = "row"
        navbarBaner.style.flexDirection = "row"
        navbar.style.display = "flex"
        navbarBaner.style.display = "flex"
    }
})

navbarBtn.addEventListener('click', () => {
    toggleNavbar()
    if (isNavbarOn) {
        navbar.style.display = "flex"
        navbarBaner.style.display = "flex"
    } else {
        navbar.style.display = "none"
        navbarBaner.style.display = "none"
    }
})

navbarBtnBaner.addEventListener('click', () => {
    toggleNavbar()
    if (isNavbarOn) {
        navbar.style.display = "flex"
        navbarBaner.style.display = "flex"
    } else {
        navbar.style.display = "none"
        navbarBaner.style.display = "none"
    }
})

navbarBtn.innerHTML = '<i class="bi bi-list"></i>'
navbarBtnBaner.innerHTML = '<i class="bi bi-list"></i>'