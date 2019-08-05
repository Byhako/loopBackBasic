// types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = 'Hello baby';
var n = 22;
var bool = true;
var myVar = false;
myVar = 22;
// strings
document.write(myString);
document.write(String(n));
// arrays
var array = ['uno', 'dos', 3];
var numbers = [1, 2, 3, 4];
// tuple
var tuple;
tuple = ['uno', 1];
// tuple = ['uno', 1, 'dos', 2];
// void, undefined, null
var PI = 3.1415;
var myvoid = undefined;
var myNull = null;
// functions
function getsum(n1, n2) {
    return n1 + n2;
}
var mySum = function (n1, n2) {
    if (typeof (n1) === 'string') {
        n1 = parseInt(n1);
    }
    if (typeof (n2) === 'string') {
        n2 = parseInt(n2);
    }
    return n1 + n2;
};
// second parameter is optional
function getName(first, last) {
    if (!last) {
        return first;
    }
    return first + " " + last;
}
document.write(getName('Toto'));
function showTodo(todo) {
    console.log(todo.title + ", " + todo.text);
}
showTodo({
    title: 'Sleep',
    text: 'I like sleep in the class'
});
var myTodo = { title: 'uno', text: 'algo mas' };
// Class
var User = /** @class */ (function () {
    function User(name, mail, age) {
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name, ' is register.');
    };
    return User;
}());
var Toto = new User('Toto', 'mail', 22);
// 
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, mail, age) {
        var _this = _super.call(this, name, age, mail) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.register = function () {
        _super.prototype.register.call(this);
    };
    return Member;
}(User));
var Tito = new Member(23, 'tito', 'mail', 34);
