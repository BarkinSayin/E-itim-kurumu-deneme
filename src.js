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
  constructor(name, students, lessons) {
    this.name = name;
    this.students = students;
    this.lessons = lessons;
  }
}
class Lesson {
  constructor(lessonName, lessonTimeOnWeekly, numberOfQuiz) {
    this.lessonName = lessonName;
    this.lessonTimeOnWeekly = lessonTimeOnWeekly;
    this.numberOfQuiz = numberOfQuiz;
  }
}
const claszB = [
  new Person("Barkın", "Sayın", 24, "İstanbul", "05354692134"),
  new Person("Mert", "Kırant", 24, "İstanbul", "05356784567"),
  new Person("Eralp", "Nitelik", 27, "İstanbul", "05321345678"),
  new Person("Ege", "Erkek", 22, "İzmir", "05342134567"),
  new Person("Ceren", "Dinçer", 22, "İstanbul", "05432345671"),
  new Person("Ali", "Taşkıran", 27, "İstanbul", "05312347896"),
];

const numericalLessons = [
  new Lesson("Matematik", 8, 2),
  new Lesson("Fizik", 4, 2),
  new Lesson("Kimya", 4, 2),
  new Lesson("Biyoloji", 4, 2),
];

const numericalClasz = new Clasz("12-B", claszB, numericalLessons);

console.log(numericalClasz);
