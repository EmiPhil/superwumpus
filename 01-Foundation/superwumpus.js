const element = document.querySelector('p')

function rotate (deltaTime) {
    let rotation = (deltaTime / 50) % 360
    element.setAttribute('style', `transform: rotate(${rotation}deg)`)
    window.requestAnimationFrame(rotate)
}

window.requestAnimationFrame(rotate)