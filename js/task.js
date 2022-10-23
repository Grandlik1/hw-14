let num = +prompt('Введите число')  ;
let reply = true;
if(num === 1 ){
    reply = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num === 1 || num % i === 0   ){
            reply = false;
            break;
        }
    }
}

alert(reply);