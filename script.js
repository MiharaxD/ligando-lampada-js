const lampada = document.getElementById('lamp')
const btn = document.getElementById('btn')
const label = document.getElementById('label')
const main = document.querySelector('main')
const body = document.querySelector('body')
const quebrando = new Audio('assets/lampada-quebrando.mp3')
const clickSom = new Audio('assets/click.mp3')
let acesa = false
let quebrada = false

btn.addEventListener('change', () => {
    clickSom.currentTime = 0
    if (btn.checked) {
        lampada.src = "assets/lampada-acesa.png"
        label.src = "assets/switch-on.png"
        body.style.backgroundColor = "#fafafa"
        clickSom.play()
    }
    else {
        lampada.src = "assets/lampada-apagada.png"
        label.src = "assets/switch-off.png"
        body.style.backgroundColor = "#111111"
        clickSom.play()
    }
    if (quebrada) {
        lampada.src = "assets/lampada-quebrada.png"
        body.style.backgroundColor = "#111111"
        return
    }
})

document.addEventListener('keydown', (tecla) => {
    clickSom.currentTime = 0
    if (tecla.key === " " && !acesa) {
        lampada.src = "assets/lampada-acesa.png"
        label.src = "assets/switch-on.png"
        body.style.backgroundColor = "#fafafa"
        clickSom.play()
        btn.checked = true
        acesa = true
    }
    else {
        lampada.src = "assets/lampada-apagada.png"
        label.src = "assets/switch-off.png"
        body.style.backgroundColor = "#111111"
        clickSom.play()
        btn.checked = false
        acesa = false
    }
    if (quebrada) {
        lampada.src = "assets/lampada-quebrada.png"
        body.style.backgroundColor = "#111111"
        return
    }
})

lampada.addEventListener('click', () => {
    if (quebrada) return
    quebrada = true
    lampada.src = "assets/lampada-quebrada.png"
    quebrando.play()
    body.style.backgroundColor = "#111111"
    main.insertAdjacentHTML('beforeend', '<h1>Você quebrou o bagulho!!!</h1>');
})