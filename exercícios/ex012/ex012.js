
var agr  = new Date()
var hora = agr.getHours()
console.log(`Agora são ${hora} horas`)
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite')
}