 // Logging something on the console
 console.log('ullala ullala hoo...!! Thats is Show Time')

 let name = "Monty";
 console.log(name);

// Cannot be areserved keyword
// Should be meaningful
// Cannot start with a number (lname)
// Cannot contain a space or hyphen (-)
//  Are case-sensitive

 let firstName = "Monty";
 let lastName ="Action";
 console.log(firstName + " " + lastName + " Laudwas");

 
 //------------ CONSTANT -----------//
 const interestRate = 0.3;
 // interestRate = 1;
 console.log(interestRate);


 let name1 = 'Monty';   // String Literal
 let age = 30;  // Number Literal
 let isApproved = false;    // Boolean Literal
 let fName = undefined;
 let lName = null;
 let selectedColor = null;

 console.log(name1);
 console.log(age);
 console.log(isApproved);
 console.log(fName);
 console.log(lName);
 console.log(selectedColor);
 


 //------------------ OBJECT TYPE --------------//
 let person = {
     name2: "Mohit",
     age: 29
 };

 // Dot Notation
 person.name2 = "Archana";

 // Bracket Notation
 let selection = 'name2';
 person[selection] = 'Manju Darling Love U';

 console.log(person);
 console.log(person.name2);


 //--------------------- ARRAY ------------------//
 let selectedColors = ['red', 'blule', 'green', 'white'];
 console.log(selectedColors);
 
 selectedColors[4] = 'Orange';
 console.log(selectedColors);

 selectedColors[5] = 1;
 console.log(selectedColors);
 
 console.log(selectedColors[2]);
 console.log(selectedColors.length);
 


 //--------------------- FUNCTION ------------------//

 // Performing a task
 function greet(NewName, Surname) {
     console.log('Hello ' + NewName + ' How are do? I can call ' + Surname);
 }

 greet('Sheela', 'Javani');
 greet('Neha', 'Gupta');


 // Calculating a value
 function square(number) {
     return number * number;
 }

 let number = square(5);
 console.log(number);
 
 console.log(square(10));
