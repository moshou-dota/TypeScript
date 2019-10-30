var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function Greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var UserName = new Student("Jane", "M.", "User");
document.body.innerHTML = Greeter(UserName);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log('Color', Color, c);
function foo() {
    // okay to capture 'a'
    return a;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
var a;
// foo();
var o = { a: 'a', b: '1' };
var newA = o.a, newB = o.b;
