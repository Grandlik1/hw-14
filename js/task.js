let num = prompt('Введите число')  ;
let reply = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        reply = false;
        break;
    }
}
alert(reply);