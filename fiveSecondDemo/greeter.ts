class Student {
  fullName: string;
  constructor (public firstName, public middleInitial, public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function Greeter (person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}
let UserName = new Student("Jane", "M.", "User");

document.body.innerHTML = Greeter(UserName)

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
console.log('Color', Color, c)

function foo() {
  // okay to capture 'a'
  return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a
// foo();
let o = {a: 'a', b: 1}
let {a: newA, b: newB}: {a: string, b: number} = o;