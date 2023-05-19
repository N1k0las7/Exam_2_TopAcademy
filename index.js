

let form = document.getElementById(`form1`)
form.onsubmit = f1

let bot = `@Bandit1922_bot`
let token = '6228292149:AAF95YY8TsWgVYgtl12fECVPGJXSunAzFiM'
let chatid = '531994284'

function f1() {
    let str = 'Данные формы' + '\n'
    let elems = form.elements
    console.log(elems)
    console.log(elems.length)
    for (x in elems) {
        if (elems[x].type == 'radio' && elems[x].checked) {
            str += elems[x].name + ' '
            str += elems[x].value + '\n'
        }
        if (elems[x].type == 'checkbox' && elems[x].checked) {
            str += elems[x].name + ' '
            str += 'выбран' + '\n'
        }
        if (x == elems.length - 1) { break }
        if (elems[x].type != 'checkbox' && elems[x].type != 'radio') {
            if (elems[x].name == '') { continue }
            if (elems[x].value == undefined) { continue }
            str += elems[x].name + ' '
            str += elems[x].value + '\n'
        }

    }
    telegram(str,token,chatid)
    return false
}

function telegram(str, token, chatid) {

    let z = $.ajax({

        type: "POST",

        url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,

        data: "parse_mode=HTML&text=" + encodeURIComponent(str),

    }).then(alert('отправили в тг'))



}