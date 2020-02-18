const numbers$ = of(1, 2, 3, 4, 5);
const predicate = (n) => n <= 2;
	numbers$
		.pipe(
			filter(predicate)
		 )
		.subscribe(console.log);
	// will log 1,2
