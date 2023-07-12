const element = document.querySelector("#web-dev-text")
const element2 = document.querySelector("#w-t-w-text")

function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
}

function showStringAnimation(str, delay, elem) {
    let index = 0

     function animate() {
          let space = str.indexOf(" ")
          if (index < str.length) {
               const currentChar = str.charAt(index)
               elem.innerHTML += currentChar

               index++
               setTimeout(animate, delay)
          }
     }

     animate()
}

window.addEventListener('DOMContentLoaded', function() {
     setTimeout(showStringAnimation, 500, "WEB-DEVELOPINGU", 100, element)
     setInterval(setTimeout(showStringAnimation, 2000, "WIZJA TWORZENIE WDRAŻANIE", 100, element2), 1500)
})
