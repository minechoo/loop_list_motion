const frame = document.querySelector('.list');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
	frame.append(frame.firstElementChild);
});

prev.addEventListener('click', () => {
	frame.prepend(frame.lastElementChild);
});
