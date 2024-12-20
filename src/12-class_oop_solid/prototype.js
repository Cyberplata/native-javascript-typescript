//  ----I----
// 1. Функция конструктор
// 2. С большой буквы называем желательно
// 3. Подразумевает, что мы её вызовем через new.
// 4. Она должна сконструировать объект и выплюнуть его и конструирует с помощью this
// Тот кто вызовет эту функцию через new, то есть произойдёт следующее неявно в DeleteUserAction -> this = {}
// 5. return this мы не пишем это происходит само по себе, так же как и создание this = {}
// 6. Вызываем с помощью new эту функцию конструктор
function DeleteUserAction(userId) {
    // this = {}
    // этому объекту присваиваются свойства
    this.type = 'DELETE-USER'
    this.payload = {
        userId: userId
    }
    // return this;
}

const action1 = new DeleteUserAction(121212)
const action2 = new DeleteUserAction(333)
console.log(action1)
console.log(action2)
// DeleteUserAction { type: 'DELETE-USER', payload: { userId: 121212 } }
// DeleteUserAction { type: 'DELETE-USER', payload: { userId: 333 } }


//  ----II----
function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}

User.prototype.hello = function () {}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

u1.hello();
u2.hello();