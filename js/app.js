// 1. Удалить из списка не машины
const ul = document.querySelector('ul');
const listItems = ul.getElementsByTagName('li');

ul.removeChild(listItems[2]);
ul.removeChild(listItems[3]);

// <!-- 2. с помощью джаваскрипт добавить ко всем li элементам класс listItem  и к ul элементу класс list из style.css -->
for(let listItem of listItems){
    listItem.classList.add('listItem');
}

// <!-- 3. добавить в начало списка новый элемент li с текстом Bugatti-->
ul.classList.add('list');

// <!-- 4. добавить в конец списка новый элемент li с текстом Ford-->
const bugattiCar = document.createElement('li');
bugattiCar.innerText = 'Bugatti';
ul.insertBefore(bugattiCar, listItems[0]);

const fordCar = document.createElement('li');
fordCar.innerText = 'Ford';
ul.appendChild(fordCar);

// <!-- 5. Добавить в форму с помощью джаваскрипт инпут для имени, фамилии, пароля и подтверждения пароля -->
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

// <!-- 6. Добавить на страницу любую картинку м помощью джаваскрипт -->
const image = document.createElement('img');
image.setAttribute('src', 'https://mdn.github.io/css-examples/css-cookbook/balloon-sq2.jpg');
form.after(image);

// <!-- 7. Удалить из параграфа класс red и italic -->
const p = document.querySelector('p');
p.classList.toggle('red');
p.classList.toggle('italic');

// <!-- 8. С помощью джаваскрипт добавить в див h1 тэг с текстом - this is h1 tag -->
const h1Wrapper = document.querySelector('#h1Wrapper');
h1Wrapper.innerHTML = '<h1>this is h1 tag</h1>';

// <!-- 9. установить h1 тэгу цвет текста - синий и размер шрифта 40 пикселей -->
const h1 = h1Wrapper.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '40px';