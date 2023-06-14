const frame = document.querySelector('.list');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
	frame.append(frame.firstElementChild);
	next.classList.add('on');
	setTimeout(() => {
		next.classList.remove('on');
	}, 500);
});

prev.addEventListener('click', () => {
	frame.prepend(frame.lastElementChild);
	prev.classList.add('on');
	setTimeout(() => {
		prev.classList.remove('on');
	}, 500);
});
