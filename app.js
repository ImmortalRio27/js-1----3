let number = +prompt("Введите число: ");
while(isNaN(number)|| number === 0){
    number =+prompt('введите число')
}
let degree = +prompt("Введите степень числа: ");

if(isNaN(degree)|| degree == 0){
    degree = 2;
}

let res = number ** degree;
alert(res)
