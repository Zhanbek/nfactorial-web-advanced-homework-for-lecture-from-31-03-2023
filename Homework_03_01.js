/*
### Тренируемся общаться с пользователем посредством alert / confirm / prompt.

Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. 
Запишите все в объект. 
И выведите в консоли. 
*/

const user = {
    name : undefined,
    age : undefined,
    sex : undefined
}

user['name'] = prompt('Укажите Ваше имя', 'Ivan');
user['age'] = prompt('Укажите Ваш возраст', 30);
user['sex'] = prompt('Ваш пол?: М / Ж', 'M');

for (property in user) {
    console.log(user[property]);
}
