const dogs = [
	{ name: 'Scnickers', age : 2},
	{ name: 'Hugo', age: 8}
];
const p = document.querySelector('p');

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('hello');

//Interpolated
console.log('Hello I am a %s string!', 'po');

// style
console.log('%c I am some great text', 'font-size: 20px')

// warning
console.warn('OH NOO');

console.error('Shit');

console.info('Fun fact');

// testing
console.assert(1 === 2, 'You did not select the right Element');

//Clearing
console.clear();

// Viewing DOM Element

console.log(p);
console.dir(p);

//Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`); //console.groupCollapsed(`${dog.name}`);
	console.log(`this is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.groupEnd(`${dog.name}`);
});

//counting
console.count('yko');
console.count('yko');
console.count('yko');
console.count('yko');
console.count('yko');

//timing
console.time('fetching data');
fetch('https://api.github.com/users/ykondrat')
	.then(data => data.json())
		.then(data => {
			console.timeEnd('fetching data');
			console.log(data);
		});

console.table(dogs);