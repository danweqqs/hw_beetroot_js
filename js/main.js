'use strict';

class Validator {
    static validateName(name) {
        if (!name || typeof name !== 'string') {
            alert('некоректне ім’я');
            return false;
        }
        return true;
    }

    static validateRole(role) {
        if (role !== 'admin' && role !== 'user') {
            alert('некоректна роль');
            return false;
        }
        return true;
    }
}

class User {
    #password;
    constructor(name, role, password) {
        if (!Validator.validateName(name)) return;
        if (!Validator.validateRole(role)) return;

        this.name = name;
        this.role = role;
        this.#password = password;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }

    login() {
        console.log(`${this.name} увійшов`);
    }

    logout() {
        console.log(`${this.name} вийшов`);
    }

    changeName(newName) {
        if (!Validator.validateName(newName)) return;
        this.name = newName;
        console.log(`ім’я змінено на ${newName}`);
    }

    changePassword(oldPass, newPass) {
        if (oldPass !== this.#password) {
            alert('невірний пароль');
            return;
        }
        this.#password = newPass;
        console.log('пароль оновлено');
    }
}

class Admin extends User {
    constructor(name, password) {
        super(name, 'admin', password);
        this._users = [];
    }

    addUser(user) {
        this._users.push(user);
        console.log(`користувача ${user.name} додано`);
    }

    removeUser(name) {
        this._users = this._users.filter(u => u.name !== name);
        console.log(`користувача ${name} видалено`);
    }

    changeUserRole(name, newRole) {
        if (!Validator.validateRole(newRole)) return;

        const user = this._users.find(u => u.name === name);
        if (!user) return;

        user.role = newRole;
        console.log(`роль ${name} змінено на ${newRole}`);
    }

    getAllUsers() {
        return this._users;
    }

    removeAllUsers() {
        this._users = [];
        console.log('всі користувачі видалені');
    }
}

const admin = new Admin('Daniil', '1234pupupu');
const u1 = new User('Ivan', 'user', '1234tytyty');
const u2 = new User('Roman', 'user', '1234bum');
admin.addUser(u1);
admin.addUser(u2);
console.log(admin.getAllUsers());
admin.changeUserRole('Daniil', 'admin');
admin.removeUser('Roman');
admin.removeAllUsers();