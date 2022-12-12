function Quiz(){

	let serialNumber = 0;

	function nextTask(){

		if(serialNumber == 10){
			console.log('END');
		}

		let question = document.querySelector('.question');
		let question_num = document.querySelector('.question-num');
		let answer = document.querySelectorAll('.answer');

		question.textContent = tasks[serialNumber];
		question_num.textContent = `${serialNumber + 1} / 10`;

		answer[0].textContent = answers[serialNumber][0];
		answer[1].textContent = answers[serialNumber][1];
		answer[2].textContent = answers[serialNumber][2];
		answer[3].textContent = answers[serialNumber][3];

		serialNumber++;

	}

	return nextTask;

}

//Объект игры
quiz = Quiz()

//Первый запуск
window.onload = quiz();

//Обработка нажатий кнопки
document.querySelector('body').onclick = function(event){

	if(event.target.classList[0] != 'container'){
		quiz();
	}

}