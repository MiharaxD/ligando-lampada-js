const lampada = document.getElementById('lamp')
const btn = document.getElementById('btn')
const label = document.getElementById('label')
const main = document.querySelector('main')
const body = document.querySelector('body')
const quebrando = new Audio('assets/lampada-quebrando.mp3')
const clickSom = new Audio('assets/click.mp3')
let acesa = false
let quebrada = false

function ligarApagar() {
    clickSom.currentTime = 0
    if (btn.checked) {
        lampada.src = "assets/lampada-acesa.png"
        label.src = "assets/switch-on.png"
        body.style.backgroundColor = "#fafafa"
        acesa = true
        clickSom.play()
    }
    else {
        lampada.src = "assets/lampada-apagada.png"
        label.src = "assets/switch-off.png"
        body.style.backgroundColor = "#111111"
        clickSom.play()
        acesa = false
    }
    if (quebrada) {
        lampada.src = "assets/lampada-quebrada.png"
        body.style.backgroundColor = "#111111"
        return
    }
}

function quebrar() {
    if (quebrada) return
    quebrada = true
    lampada.src = "assets/lampada-quebrada.png"
    quebrando.play()
    body.style.backgroundColor = "#111111"
    main.insertAdjacentHTML('beforeend', '<h1>Você quebrou o bagulho!!!</h1>');
}

btn.addEventListener('change', ligarApagar)

document.addEventListener('keydown', (e) => {
    if (!acesa) {
        btn.checked = true
    } else {
        btn.checked = false
    }
    if (e.code === "Space") {
        ligarApagar()
    }
})

lampada.addEventListener('click', quebrar)
window.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
        quebrar()
    }
})