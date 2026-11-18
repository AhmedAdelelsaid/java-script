function getPersonInfo(person) {
  return person.name + " is " + person.age + " years old";
}
var person = { name: "John", age: 25 };
console.log(getPersonInfo(person));