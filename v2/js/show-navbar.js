function checkDivVisibility() {
    const generalNavbar = document.querySelector('#general-navbar')
    const banarNavbar = document.querySelector('#checker')

    const isbanarNavbarVisible = () => {
        const rect = banarNavbar.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        const windowWidth = window.innerWidth || document.documentElement.clientWidth

        return (
            rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > windowWidth ||
            rect.top > windowHeight
        )
    }

    if (isbanarNavbarVisible()) {
        generalNavbar.style.display = "block"
    } else {
        generalNavbar.style.display = "none"
    }
}

window.addEventListener('scroll', checkDivVisibility)