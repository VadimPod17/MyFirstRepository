'use strict';

const sayHello = function() {
	const name = prompt('Привет, как тебя зовут?');
	if (name !== null && name !== '') {
		alert(`Я рад познакомиться с тобой, ${name}! Спасибо, что заглянул на сайт!`);
	} else if (name === '') {
		alert(`Ты не сказал, как тебя зовут, поэтому я буду звать тебя Неопознанной Чупакаброй!!!`);
	}
}