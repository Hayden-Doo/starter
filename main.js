// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }
// User.prototype.getFullName = function () {


//     return ` ${this.firstName} ${this.lastName} `
// }

// const hello = new User('123', '456')
// const aaa = new User('111', '222')

// console.log(hello.getFullName())
// console.log(aaa.getFullName())

// class User {
//     // constructor: function() {
//     constructor (first, last) {
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const hello = new User('123', '456')
// const aaa = new User('111', '222')

// console.log(hello.getFullName())
// console.log(aaa)

// class Vehicle {
//     constructor(name, wheel){
//         this.name = name
//         this.wheel = wheel
//     }
// }

// const myVehicle = new Vehicle('Moving', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//     constructor (name, wheel){
//         super (name, wheel)
//     }
// }
// const myBicycle = new Bicycle('3000', 2)
// console.log(myBicycle)

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         super(name, wheel)
//         this.license = license
//     }
// }
// const myCar = new Car('BMW', 4, true)
// console.log(myCar)

// const fruits = ['apple', 'banana', 'cherry', 'orange']
// function toObject(a, b, ...c) {
//     return {
//         a,
//         b,
//         c
//     }
// }
// const toObject = (a, b, c) => ({a,b,c})
// console.log(toObject(...fruits))

// const user = {
//     name: 'doo',
//     age:10,
//     addr: ['Korea']
// }
// const copyUser = Object.assign({}, user)
// console.log(copyUser === user)
// user.addr.push('China')
// console.log(copyUser === user)


// console.log(user)
// console.log(copyUser)

// localStorage.setItem('1', 'doo')
// console.log(localStorage.getItem('id'));

// const doo2 = {
//     name: 'doo',
//     age:10,
//     addr: ['Korea']
// }

// localStorage.setItem('2', JSON.stringify(doo2))
// localStorage.setItem('3', doo3)

// const str = localStorage.getItem('2')
// const obj = JSON.parse(str)
// obj.age = 20
// console.log(obj);
// localStorage.setItem('2', JSON.stringify(obj))

// localStorage.removeItem('2')

// import axios from 'axios'

// function fetchMovies() {
//     axios
//         .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//         .then((res) => {
//             console.log(res);
//             const h1El = document.querySelector('h1')
//             const imgEl = document.querySelector('img')
//             h1El.textContent = res.data.Search[0].Title
//             imgEl.src = res.data.Search[0].Poster
//         })
// }
// fetchMovies()

const str = `
010-1234-5678
the@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The 1234 the dog
abcd
`
// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp))
console.log(regexp.test(str));
