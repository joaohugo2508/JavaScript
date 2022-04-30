var corpo = window.document.getElementsByTagName('body')[0]
corpo.addEventListener('onload', carregar())

function carregar() {
    var msg =  window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        foto.src = 'dia-pronto.png'
        window.document.body.style.background = '#FCE476'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        foto.src = 'tarde-pronto.png'
        window.document.body.style.background = '#FD8205'
    } else {
        //BOA NOITE!
        foto.src = 'noite-lamp-pronto.png'
        window.document.body.style.background = '#031C3A'
    }
}
