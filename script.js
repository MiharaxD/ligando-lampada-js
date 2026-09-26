const lampada = document.getElementById('lamp')
const btn = document.getElementById('btn')
const label = document.getElementById('label')
const main = document.querySelector('main')
const body = document.querySelector('body')

let quebrada = false

btn.addEventListener('change', () => {
    if (btn.checked) {
        lampada.src = "assets/lampada-acesa.png"
        label.src = "assets/switch-on.png"
        body.style.backgroundColor = "#fafafa"
    }
    else {
        lampada.src = "assets/lampada-apagada.png"
        label.src = "assets/switch-off.png"
        body.style.backgroundColor = "#111111"
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
    body.style.backgroundColor = "#111111"
    main.insertAdjacentHTML('beforeend', '<h1>Você quebrou o bagulho!!!</h1>');
})