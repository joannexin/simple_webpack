// ES5 version of import
// const sum = require('./sum');

// ES6 version of import
// import sum from './sum';
// import './image_viewer';

// const total = sum(10, 5);
// console.log(total);

// ======================================

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
	System.import('./image_viewer').then(module => {
		module.default();
	});
};

document.body.appendChild(button);