class Person {
  constructor(firstName, lastName, age, adress, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.adress = adress;
    this.phone = phone;
  }
}
class Clasz {
  constructor(students, name) {
    this.students = students;
    this.name = name;
  }
}

const claszB = [
  new Person("Barkın", "Sayın", 24, "İstanbul", "05354692134"),
  new Person("Mert", "Kırant", 24, "İstanbul", "05356784567"),
  new Person("Eralp", "Nitelik", 27, "İstanbul", "05321345678"),
  new Person("Ege", "Erkek", 22, "İzmir", "05342134567"),
  new Person("Ceren","Dinçer",22,"İstanbul","05432345671"),
  new Person("Ali","Taşkıran",27,"İstanbul","05312347896"),
];

const numericalClasz = new Clasz(claszB, "12-B");

console.log(numericalClasz);
