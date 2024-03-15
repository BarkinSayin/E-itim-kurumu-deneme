class Person {
  constructor(firstName, lastName, age, city, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
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
  new Person("Ceren", "Dinçer", 31, "İstanbul", "05432345671"),
  new Person("Ali", "Taşkıran", 27, "İstanbul", "05312347896"),
  new Person("Berkay","Turna",34)
];

const numericalLessons = [
  new Lesson("Mathematics", 8, 2),
  new Lesson("Physics", 4, 2),
  new Lesson("Chemistry", 4, 2),
  new Lesson("Biology", 4, 2),
];

const numericalClasz = new Clasz("12-B", claszB, numericalLessons);

console.table(numericalClasz);
console.table(numericalClasz.students);

//SelectBox'ı dinleyip change event'i ile bir değişikil olursa fonksiyon çalıştırıyoruz
document.getElementById("numericalSelectBox").addEventListener("change", () => {
  displaySelectedOption();
});

const displaySelectedOption = () => {
  const selectedValue = document.getElementById("numericalSelectBox").value;
  const contentBody = document.getElementById("contentBody");
  const tableHead = document.getElementById("tableHead");
  contentBody.innerHTML = ""; // Tabloyu temizle
  tableHead.innerHTML = ""; // Tabloyu temizle

  if (selectedValue === "students") {
    // Eğer "Students List" seçeneği seçildiyse
    const thRow = document.createElement("tr");
    thRow.innerHTML = `
        <th scope="col" class="th-info">First Name</th>
        <th scope="col" class="th-info">Last Name</th>
        <th scope="col" class="th-info">Age</th>
        <th scope="col" class="th-info">City</th>
        <th scope="col" class="th-info">Phone</th>
            `;
    claszB.forEach((student) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.age?student.age:"Not specified"}</td>
                <td>${student.city?student.city:"Not specified"}</td>
                <td>${student.phone?student.phone:"Not specified"}</td>
            `;
      contentBody.appendChild(row);
    });
    tableHead.appendChild(thRow);
  } else if (selectedValue === "lessons") {
    // Eğer "Numerical Lessons" seçeneği seçildiyse
    const thRow = document.createElement("tr");
    thRow.innerHTML = `
        <th scope="col" class="th-info">Lesson Name</th>
        <th scope="col" class="th-info">Lesson Time</th>
        <th scope="col" class="th-info">Number of Quiz</th>
            `;
    numericalLessons.forEach((lesson) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${lesson.lessonName}</td>
                <td>${lesson.lessonTimeOnWeekly}</td>
                <td>${lesson.numberOfQuiz}</td>
            `;
      contentBody.appendChild(row);
    });
    tableHead.appendChild(thRow);
  }
};
