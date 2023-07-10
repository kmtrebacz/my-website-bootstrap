let element = document.querySelector("#char_anim")

function sleep(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
}

function showStringAnimation(str, delay) {
    let index = 0

     function animate() {
          let space = str.indexOf(" ")
          if (index < str.length) {
               const currentChar = str.charAt(index)
               element.innerHTML += currentChar

               if (index == space){
                    element.innerHTML += "<br>"
               }

               index++
               setTimeout(animate, delay)
          }
     }

     animate()
}

window.addEventListener('DOMContentLoaded', function() {
     setTimeout(showStringAnimation, 500, "Stron Internetowych", 125)
})

