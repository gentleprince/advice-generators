const id = document.querySelector('.heading');
const text = document.querySelector('.Advice_text');
const button = document.querySelector('.button');

// Best practice for advice quotes api
// onload
document.addEventListener('DOMContentLoaded', async function random_advice() {
	const response = await fetch(
		'https://api.adviceslip.com/advice', {
			method: 'GET'
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
	const ids = data.slip.id;
	const advices = data.slip.advice;

	id.innerHTML = `Advice #${ids}`;
	text.innerHTML = `<q> ${advices} </q>`;

	// onclick
	button.onclick = async function random_advice() {
		const response = await fetch(
			'https://api.adviceslip.com/advice', {
				method: 'GET'
			}
		);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		const ids = data.slip.id;
		const advices = data.slip.advice;

		id.innerHTML = `Advice #${ids}`;
		text.innerHTML = `<q> ${advices} </q>`;
	};
});

// advice quotes api allternative

// onload
// document.addEventListener('DOMContentLoaded', async function random_advice() {
// 	const response = await fetch(
// 		'https://api.adviceslip.com/advice', {
// 			method: 'GET'
// 		}
// 	);
// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}
// 	const data = await response.json();
// 	console.log(data);

// 	const ids = data.slip.id;
// 	const advices = data.slip.advice;

// 	id.innerHTML = `Advice #${ids}`;
// 	text.innerHTML = `<q> ${advices} </q>`;
// });

// onclick
// button.addEventListener('click', async function random_advice() {
// 	const response = await fetch(
// 		'https://api.adviceslip.com/advice', {
// 			method: 'GET'
// 		}
// 	);
// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}
// 	const data = await response.json();
// 	console.log(data);

// 	const ids = data.slip.id;
// 	const advices = data.slip.advice;

// 	id.innerHTML = `Advice #${ids}`;
// 	text.innerHTML = `<q> ${advices} </q>`;
// });