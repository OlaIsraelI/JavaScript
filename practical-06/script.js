//create a function that adds list of numbers

//function declaration

// function addNumbers(nums){
//   return nums.reduce(function(prev, next){
//     return prev + next;
//   }, 0);
// }


// const total = addNumbers([2,4,6,8,0]);


//function expression
// const addNumbers = function(nums){
//   return nums.reduce(function(prev, next){
//     return prev + next;
//   }, 0);
// } ;


// const total = addNumbers([2, 4, 6, 8, 0]);


// const addNumber = (nums) => nums.reduce((prev, next) => prev + next, 0);

/// Array of 30 user objects with added 'id' attribute
const users = [
  { id: 1, age: 25, firstName: 'John', lastName: 'Doe', score: 89 },
  { id: 2, age: 30, firstName: 'Jane', lastName: 'Smith', score: 72 },
  { id: 3, age: 22, firstName: 'Alice', lastName: 'Johnson', score: 95 },
  { id: 4, age: 28, firstName: 'Bob', lastName: 'Brown', score: 67 },
  { id: 5, age: 35, firstName: 'Charlie', lastName: 'Williams', score: 80 },
  { id: 6, age: 40, firstName: 'Diana', lastName: 'Jones', score: 92 },
  { id: 7, age: 27, firstName: 'Edward', lastName: 'Miller', score: 75 },
  { id: 8, age: 33, firstName: 'Fiona', lastName: 'Davis', score: 88 },
  { id: 9, age: 29, firstName: 'George', lastName: 'Garcia', score: 66 },
  { id: 10, age: 24, firstName: 'Hannah', lastName: 'Martinez', score: 94 },
  { id: 11, age: 26, firstName: 'Irene', lastName: 'Lopez', score: 78 },
  { id: 12, age: 31, firstName: 'Jack', lastName: 'Gonzalez', score: 85 },
  { id: 13, age: 34, firstName: 'Karen', lastName: 'Perez', score: 91 },
  { id: 14, age: 21, firstName: 'Leo', lastName: 'Wilson', score: 74 },
  { id: 15, age: 23, firstName: 'Maria', lastName: 'Anderson', score: 82 },
  { id: 16, age: 32, firstName: 'Nathan', lastName: 'Thomas', score: 77 },
  { id: 17, age: 36, firstName: 'Olivia', lastName: 'Taylor', score: 84 },
  { id: 18, age: 38, firstName: 'Paul', lastName: 'Moore', score: 79 },
  { id: 19, age: 39, firstName: 'Quinn', lastName: 'Jackson', score: 93 },
  { id: 20, age: 37, firstName: 'Rachel', lastName: 'Martin', score: 69 },
  { id: 21, age: 41, firstName: 'Sam', lastName: 'Lee', score: 87 },
  { id: 22, age: 42, firstName: 'Tina', lastName: 'Harris', score: 81 },
  { id: 23, age: 45, firstName: 'Umar', lastName: 'Clark', score: 73 },
  { id: 24, age: 44, firstName: 'Vicky', lastName: 'Lewis', score: 90 },
  { id: 25, age: 43, firstName: 'Will', lastName: 'Walker', score: 70 },
  { id: 26, age: 47, firstName: 'Xena', lastName: 'Hall', score: 96 },
  { id: 27, age: 48, firstName: 'Yara', lastName: 'Allen', score: 83 },
  { id: 28, age: 49, firstName: 'Zach', lastName: 'Young', score: 86 },
  { id: 29, age: 50, firstName: 'Amy', lastName: 'King', score: 68 },
  { id: 30, age: 55, firstName: 'Brian', lastName: 'Scott', score: 65 },
];

// Display the array of user objects
// console.log(users);

//This Function returns the found user by Id
// const findUserById = (users) => {
//   return users.find((user) => user.id === 5);
// };

// console.log(findUserById(users))


//This Function returns the filter of Ages less than 50
// const findUserByAge = (users) => {
//   return users.filter((user) => user.age < 60);
// };

// console.log(findUserByAge(users));


const calclateAveAge = (users) => {
  return users.reduce((prev, next) => prev + next.age, 0) / users.length;
}

console.log(calclateAveAge(users));