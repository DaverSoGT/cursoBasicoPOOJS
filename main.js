const natalia = {
  name: 'Natalia',
  age: 20,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctico de HTML y CSS'
  ],
  approveCourse(nuevoCurso) {
    this.approvedCourses.push(nuevoCurso)
  }
}

function Student(name, age, approvedCourses) {
  this.name = name
  this.age = age
  this.approvedCourses = approvedCourses
  // this.approveCourse = function (newCourse) {
  //   this.approvedCourses.push(newCourse)
  // }
}

Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse)
}

const juanita = new Student(
  'Juanita Alejandra',
  15,
  [
    'Curso de Introducción a la Producción de Videojuegos',
    'Curso de Creación de Personajes'
  ]
)

// Prototipos con la sintaxis de clases
class Student2 {
  constructor({
    name,
    age,
    email,
    twitter,
    instagram,
    facebook,
    approvedCourses = []
  }) {
    this.name = name
    this.age = age
    this.email = email
    this.approvedCourses = approvedCourses
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}

const miguel = new Student2({
  email: 'miguel@gmail.com',
  age: 28,
  name: 'Miguel León',
  approvedCourses: [ 'Curso de Análisis para Ciencia de Datos',
    'Curso de Principios de visualización de Datos para BI'
  ]
}
)