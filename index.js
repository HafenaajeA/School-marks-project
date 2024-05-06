// Define a class for the student
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.checkedMark = false;
  }

  // Methods to generate random marks
  generateMark() {
    if (this.checkedMark) {
      return "You have already checked your marks!";
    }
    this.marks = Math.floor(Math.random() * (100 - 30 + 1) + 30);
    this.checkedMark = true;
  }

  // Methods to generate random messages based on marks
  generateMessage() {
    if (this.marks >= 90) {
      return "Excellent! Keep up the good work!";
    } else if (this.marks >= 70) {
      return "Well done! You're doing great!";
    } else if (this.marks >= 50) {
      return "Good effort! Keep improving!";
    } else {
      return "Keep working hard, you'll get there!";
    }
  }
}

// Array of names
const validNames = [
  { firstName: "Almando", lastName: "Hafenaaje" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Alice", lastName: "Johnson" },
  { firstName: "Lazarus", lastName: "IIpinge" },
  { firstName: "Johannes", lastName: "Simon" },
  { firstName: "Petrina", lastName: "Fillipus" },
  { firstName: "Ester", lastName: "Ndatomwiyo" },
  { firstName: "Kagirl", lastName: "Hafenaaje" },
  { firstName: "Suama", lastName: "Shivolo" },
  { firstName: "Nickie", lastName: "Pedro" },
  { firstName: "Eveline", lastName: "Kashilula" },
];

// Function to generate mark and display message
function generateMark() {
  // Get the student's name from the input field
  const nameEl = document.getElementById("name").value.trim();

  // Check if the name field is empty
  if (nameEl === "") {
    document.getElementById("output").innerHTML =
      "<p>Please enter your name</p>";
    return; // Exit the function if the name field is empty
  }

  // Split the name into first name and last name
  const [firstName, lastName] = nameEl.split(" ");

  // Check if both first name and last name are provided
  if (!firstName || !lastName) {
    document.getElementById("output").innerHTML =
      "<p>Please enter both first name and last name!</p>";
    return;
  }

  // Find the student in the validNames array
  const student = validNames.find(
    (nameObj) =>
      nameObj.firstName === firstName && nameObj.lastName === lastName
  );

  // If student not found
  if (!student) {
    document.getElementById("output").innerHTML = "<p>Name not found!</p>";
    return;
  }

  // Create a new Student object
  const newStudent = new Student(firstName, lastName);

  // Generate mark and message
  newStudent.generateMark();
  const message = newStudent.generateMessage();

  // Display output
  document.getElementById(
    "output"
  ).innerHTML = `<p>Dear ${firstName}, your mark is ${newStudent.marks}. ${message}</p>`;
}

// // Define a class for the student

// class Student {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.checkedMark = false;
//   }

//   //Methods to generate random marks
//   generateMark() {
//     if (this.checkedMark) {
//       return "You have already checked your marks!";
//     }
//     this.marks = Math.floor(Math.random() * (100 - 30 + 1) + 30);
//     this.checkedMark = true;
//   }

//   //Methods to generate random messages based on marks
//   generateMessage() {
//     if (this.marks >= 90) {
//       return "Excellent! Keep up the good work!";
//     } else if (this.marks >= 70) {
//       return "Well done! You're doing great!";
//     } else if (this.marks >= 50) {
//       return "Good effort! keep improving!";
//     } else {
//       return "Keep working hard, you'll get there!";
//     }
//   }
// }

// //Array of name

// const validNames = [
//   { firstName: "Almando", lastName: "Hafenaaje" },
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Lazarus", lastName: "IIpinge" },
//   { firstName: "Johannes", lastName: "Simon" },
//   { firstName: "Petrina", lastName: "Fillipus" },
//   { firstName: "Ester", lastName: "Ndatomwiyo" },
//   { firstName: "Kagirl", lastName: "Hafenaaje" },
//   { firstName: "Suama", lastName: "Shivolo" },
//   { firstName: "Nickie", lastName: "Pedro" },
//   { firstName: "Eveline", lastName: "Kashilula" },
// ];

// //function to generate mark and display message
// function generateMark() {
//   //Get the student's name from the input field
//   const nameEl = document.getElementById("name").value.trim();

//   //Check if the name field is empty
//   if (nameEl === "") {
//     document.getElementById("output").innerHTML =
//       "<p>Please enter your name</p>";
//     return; //Exit the function if the name field empty
//   }

//   //Split the name into first name and last name
//   const [firstName, lastName] = nameEl.split(" ");

//   // Check if both first name and last name are provided
//   if (!firstName || !lastName) {
//     document.getElementById("output").innerHTML =
//       "<p>Please enter both first name and last name!</p>";
//     return;
//   }

//   // Find the student in the namesArray
//   const student = validNames.find(
//     (nameObj) =>
//       nameObj.firstName === firstName && nameObj.lastName === lastName
//   );

//   // If student not found
//   if (!student) {
//     document.getElementById("output").innerHTML = "<p>Name not found!</p>";
//     return;
//   }

//   //create a new Student object
//   const newStudent = new Student(firstName, lastName, age);

//   //generate mark and message
//   student.generateMark();
//   const message = newStudent.generateMessage();

//   //Display output
//   document.getElementById(
//     "output"
//   ).innerHTML = `<p>Dear ${firstName}, your mark is ${newStudent.marks}. ${message}</p>`;
// }
