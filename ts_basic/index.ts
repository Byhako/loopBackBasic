// types

var myString: string = 'Hello baby';
var n: number = 22;
var bool: boolean = true;
var myVar: any = false;
myVar = 22;

// strings

document.write(myString);
document.write(String(n));

// arrays

var array: any[] = ['uno', 'dos', 3];
var numbers: number[] = [1, 2, 3, 4];

// tuple

var tuple: [string, number];
tuple = ['uno', 1];
// tuple = ['uno', 1, 'dos', 2];

// void, undefined, null
const PI = 3.1415;
let myvoid: void = undefined;
let myNull: null = null;

// functions

function getsum(n1: number, n2: number) {
  return n1 + n2;
}

const mySum = function(n1: number | string, n2: number | string):number {
  if (typeof(n1) === 'string') {
    n1 = parseInt(n1);
  }
  if (typeof(n2) === 'string') {
    n2 = parseInt(n2);
  }
  return n1 + n2;
}

// second parameter is optional
function getName(first: string, last?: string): string {
  if (!last) {
    return first;
  }
  return `${first} ${last}`;
}

document.write(getName('Toto'));

// Interfaces

interface ITodo {
  title: string;
  text: string;
}
function showTodo(todo: ITodo) {
  console.log(`${todo.title}, ${todo.text}`);
}

showTodo({
  title: 'Sleep',
  text: 'I like sleep in the class'
})

var myTodo: ITodo = {title: 'uno', text: 'algo mas'};

// Class

class User {
  public name: string;
  public mail: string;
  protected age: number;

  constructor(name, mail, age) {
    this.name = name;
    this.mail = mail;
    this.age = age;
  }

  register() {
    console.log(this.name, ' is register.')
  }
}

var Toto = new User('Toto', 'mail', 22);

// 

class Member extends User {
  id: number;

  constructor(id, name, mail, age) {
    super(name, age, mail);
    this.id = id;
  }

  register() {
    super.register();
  }
}

var Tito = new Member(23, 'tito', 'mail', 34);
