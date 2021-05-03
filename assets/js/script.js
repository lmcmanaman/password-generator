// variables
var special;
var num; 
var lower ;
var upper;
var password = [];
var choices;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character arrays
specialCharacter = ['!', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '/', ':', ';', '<', '=', '>', '?', '@','"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.'];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    passwordText = generatePassword();
    document.getElementById("password").placeholder = passwordText;
});

// password function
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password to be? Choose a length between 8 and 128."));
    

    // nothing entered for length
    if (!enter) {
        alert("This needs a valid number");
    // if num entered is not in the range
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Length must be between 8 and 128 characters. How many characters would you like your password to be?"));

    } else {
        // character choices to pick if number is in the range
        upper = confirm("Would you like to use uppercase letters?");
        lower = confirm("Would you like to use lowercase letters?");
        num = confirm("Would you like to use numbers?");
        special = confirm("Would you like to use special characters?");
    };

    // no choices picked alert must chose at least one
    if (!special && !num && !upper && !lower) {
        choice = alert("You must select at least one character type!");

    }
    // all true
    else if (special && num && upper && lower) {
      choice = specialCharacter.concat(numbers, lowercase, uppercase);
    }
    // 3 true
    else if (num && lower && upper) {
      choice = numbers.concat(lowercase, uppercase);
    }
    else if (special && num && upper) {
        choice = specialCharacter.concat(numbers, uppercase);
    }
    else if (special && num && lower) {
        choice = specialCharacter.concat(numbers, lowercase);
    }
    else if (special && lower && upper) {
        choice = specialCharacter.concat(alpha, uppercase);
    }
   
    // 2 true
    else if (special && upper) {
      choice = specialCharacter.concat(uppercase);
    }
    else if (special && num) {
        choice = specialCharacter.concat(numbers);
    } 
    else if (num && upper) {
      choice = numbers.concat(uppercase);
    }
    else if (lower && num) {
        choice = lowercase.concat(numbers);
    } 
    else if (upper && lower) {
      choice = uppercase.concat(lowercase);
    }    
    // 1 true
    else if (upper) {
      choice = uppercase;
    }
    else if (num) {
        choice = numbers;
    }
    else if (special) {
      choice = specialCharacter;
    }
    else if (lower) {
        choice = lowercase;
    };
    // make all var random 
    for (var i = 0; i < enter; i++) {
        var pass = choice[Math.floor(Math.random() * choice.length)];
        password.push(pass);
    }
    // password array added together
    var passwordText = password.join("");
    WritePassword(passwordText);
    alert(passwordText);
}
//password to input box 
function WritePassword(passwordText) {
    document.getElementById("password").textContent = passwordText;

}