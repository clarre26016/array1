//2.4.1 Intro to Arrays

//create
let students = ['Megan', 'Maria', 'Caled', 'Crystal'];
let values = [1,2,3,4];

//accessing items in an array
console.log(students);
console.log(students[0]); //beginning item has index 0
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]); //error, as there is no 5th person

//formatting items in array
console.log('Student: '+ students[0]);
console.log(`student 2: ${students[1]}`);

//changing an item
students[1] = 'Stephanie';
console.log(students);

//push adds to the end
students.push('Eve');
console.log(students)
