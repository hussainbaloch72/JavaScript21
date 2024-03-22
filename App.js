// Assignment no 21

// Chapter 21-25 

// Q1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + "" + lastName;
// console.log("Welcome", fullName);

// Q2
// const userPhoneModel = prompt('Enter your favorite mobile phone model');
// const inputLength = userPhoneModel.length;
// document.write('My favorite phone is:',userPhoneModel,' ', "Lenghth of string:",inputLength)

// Q3
// const word = 'pakistani';
// const indexOfN = word.indexOf("n");
// document.write(`Index of 'n' in "${word}" is: ${indexOfN}`);

// Q4
// const word = "Hello World";
// const lastIndex = word.lastIndexOf("1");
// document.write(`The last index of 'l' in "${word}" is: ${lastIndex}`);

// Q5
// document.body.innerHTML = `String: Pakistani <br> Character at index 3: ${'Pakistani'[3]}`;

// Q6
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = firstName.concat(" ", lastName);
// alert(`Hello, ${fullName}! Welcome!`);

// Q7
// var city = "Hyderabad";
// document.write("After replacement: " + city.replace("Hyder", "Islam"));
// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("After replacement: " + message.replace(/and/g, "&"));

// Q9
// var strNumber = "472";
// var number = parseInt(strNumber);
// document.write("Value: " + number + "<br>");
// document.write("Type: " + typeof(number));

// Q10
//var userInput = prompt("Enter some text:");
// document.write("Capitalized input: " + userInput.toUpperCase()); 

// Q11
// var userInput = prompt("Enter some text:");
// var titleCase = userInput.toLowerCase().replace(/\b\w/g, function (char) {
//     return char.toUpperCase();
// });
// document.write("Title case input: " + titleCase);

// Q12
// var num = 35.36;
// var strNum = num.toString().replace(".", "");
// document.write("Number without dot: " + strNum);

// Q13
// var username = prompt("Enter your username:");
// if (/[!@,.]/.test(username)) {
//     alert("Please enter a valid username without special symbols.");
// }

// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert("Yes, '" + userInput + "' is available in the list.");
// } else {
//     alert("No, '" + userInput + "' is not available in the list.");
// }

// Q15
// var password = prompt("Enter your password:");
// if (
//     !/^[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(password) ||
//     password.length < 6
// ) {
//     alert("Please enter a valid password.");
// }

// Q16
// var university = "University of Karachi";
// var universityArray = university.split(" ");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// Q17
// var userInput = prompt("Enter something:");
// document.write("Last character: " + userInput.charAt(userInput.length - 1));

// Q18
// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = sentence.match(/\bthe\b/gi).length;
// document.write("Occurrences of 'the': " + count);

// Questions PDF 21-25:

// Chapter 21 (Changing Case)

// Q1
// var allLower = userInput.toLowerCase();

// Q2
// x = x.toLowerCase();

// Q3
// y = y.toUpperCase();

// Q4
// var lowerCaseString = originalString.toLowerCase();

// Q5
// var lowerCaseElement = arrayElement.toLowerCase();

// Q6
// alert(cityName.toUpperCase());

// Q7
// var cityName = "kaRacHi";
// cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22 - 25 (Strings)

// Q1
// var sameWords = "captain";
// var slicedWord = sameWords.slice(1, 3);

// Q2
// var stringLength = someString.length;

// Q3
// var animal = "elephant";
// var seg = animal.slice(2, 6);

// Q4
// var str = "some string";
// var strLength = str.length;

// Q5
// var anotherString = "some other string";
// var length = anotherString.length;
// var slicedPart = anotherString.slice(1, length - 3);

// Q6
// var text = "To be or not to be.";
// var indx = text.indexOf("be"); 

// Q7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be"); 

// Q8
// var indx = text.lastIndexOf("go");

// Q9
// if (text.indexOf(segment) !== -1) 

// Q10
// var cha = "abcde".charAt(2);

// Q11
// var cha = text.charAt(9);

// Q12
// var x = str.charAt(str.length - 1);

// Q13

// var cha = input.charAt(4);


