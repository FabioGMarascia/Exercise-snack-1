// // N. 1
// const first_word = prompt(`Digita prima parola`);
// const second_word = prompt(`Digita seconda parola`);

// if (first_word.length < second_word.length) {
// 	alert(first_word);
// 	alert(second_word);
// } else {
// 	alert(second_word);
// 	alert(first_word);
// }

// // N. 2
// let sum = 0;

// for (let i = 0; i < 10; i++) {
// 	let number = parseInt(prompt(`Inserisci numero`));
// 	sum += number;
// }
// alert(sum);

// // N. 3
let number = 1;

while (number < 1000) {
	if (number < 1000) {
		console.log(number);
	} else {
		break;
	}
	number = 2 * number;
}

// // N. 4
// let counter = prompt(`Inserisci numero`);

// for (let i = 0; i < counter; i++) {
// 	let random = Math.floor(Math.random() * 10);
// 	console.log(`Il numero random è ${random}`);
// 	let cube = random * random * random;
// 	console.log(`Il cubo è ${cube}`);
// }

// // N. 5
// let number = prompt(`Inserire un numero di quattro cifre`);
// let sum = 0;

// while (number) {
// 	sum += number % 10;
// 	number = Math.floor(number / 10);
// }
// console.log(sum);

// // N. 6
// let number;

// while (number != 42) {
// 	number = prompt(`Inserire numero`);
// 	if (number == 42) {
// 		console.log(`Complimenti, è il numero giusto!`);
// 	}
// }
