do {
    var number = +prompt('Введите число: ')
    number == isNaN(number)? 5: number;
    var tab = prompt('Введите символ отступов: ')
    var last = prompt('Введите конечный символ: ')
} while (
   number == 0 || tab == "" || last == ""
);
  number == isNaN(number)? 5 :  number;
var res = '';
for (let i = 0; i < number; i++){
    res = res + tab;
    console.log(res + last)
}
