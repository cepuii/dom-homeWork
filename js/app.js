
const ul = document.querySelector('ul');
const listItems = ul.getElementsByTagName('li');

ul.removeChild(listItems[2]);
ul.removeChild(listItems[3]);

for(let listItem of listItems){
    listItem.classList.add('listItem');
}

ul.classList.add('list');

const bugattiCar = document.createElement('li');
bugattiCar.innerText = 'Bugatti';
ul.insertBefore(bugattiCar, listItems[0]);

const fordCar = document.createElement('li');
fordCar.innerText = 'Ford';
ul.appendChild(fordCar);


const form = document.querySelector('form');
const inputs = [
    { type: 'text', name: 'name', placeholder: 'Your name'},
    { type: 'text', name: 'surname', placeholder: 'Your surname'},
    { type: 'password', name: 'password', placeholder: 'Password'},
    { type: 'password', name: 'confirm-password', placeholder: 'Confirm password'},
]

for(let inputData of inputs){
    let input = document.createElement('input');
    input.setAttribute('type', inputData.type);
    input.setAttribute('name', inputData.name);
    input.setAttribute('placeholder', inputData.placeholder);
    form.appendChild(input);
}

const image = document.createElement('img');
image.setAttribute('src', 'https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg');
form.after(image);

const p = document.querySelector('p');
p.classList.toggle('red');
p.classList.toggle('italic');

const h1Wrapper = document.querySelector('#h1Wrapper');
h1Wrapper.innerHTML = '<h1>this is h1 tag</h1>';
const h1 = h1Wrapper.querySelector('h1');
h1.classList.add('h1Style');