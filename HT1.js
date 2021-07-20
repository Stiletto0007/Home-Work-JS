if (day < 10) {
    alert('Первая декада!');
} else if (day <= 20) {
    alert('Вторая декада');
} else if (day > 21) {
    alert('Третья декада');
} else {
    alert('Значение только до 31');
}


if (month < 3) {
    alert('Зима!');
} else if (month < 6) {
    alert('Весна');
} else if (month < 9) {
    alert('Лето');
} else if (month < 11) {
    alert('Осень')
} else {
    alert('Значение только до 12');
}



if (minute <= 15) {
    alert('1 Четверть')
} else if (minute <= 30) {
    alert('2 Четверть')
} else if (minute <= 45) {
    alert('3 Четверть')
} else {
    alert('4 Четверть')
}


let age = prompt('Возраст?', 18);

let message = (age < 18) ? 'Здравствуй, мелкий!' :
    (age > 18) ? 'Привет!' :
    (age < 100) ? 'Здравствуйте!' :
    'вы допущены';

alert(message);