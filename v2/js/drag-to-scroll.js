const slider = document.querySelector('.drag-to-scroll')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
    let rect = slider.getBoundingClientRect()
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - rect.left
    scrollLeft = slider.scrollLeft
    console.log(startX, scrollLeft)
})

slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.dataset.dragging = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
    isDown = false
    slider.dataset.dragging = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return
    let rect = slider.getBoundingClientRect()
    e.preventDefault()
    slider.dataset.dragging = true
    const x = e.pageX - rect.left
    const walk = (x - startX)
    slider.scrollLeft = scrollLeft - walk
    console.log(x, walk, slider.scrollLeft)
})