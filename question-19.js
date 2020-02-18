const node = document.querySelector('input[type=text]');

	const input$ = Rx.Observable.fromEvent(node, 'input');

	input$.subscribe({
	  next: event => console.log(`You just typed ${event.target.value}!`),
	  error: err => console.log(`Oops... ${err}`),
	  complete: () => console.log(`Complete!`),
	});
