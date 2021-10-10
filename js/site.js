function getString() {

    //Get the user's input
    let userString = document.getElementById("userString").value;


    // if (userString != 2) {
    //    Swal.fire({
    //        icon: 'error',
    //        title: 'Oops...',
    //        text: 'You must enter 2 or more characters',
           
    //    })
    // };

    //Test the user's input for length
    //Reverse the input => seperate function
    let revString = reverseString(userString);

    //Display the result => seperate function
    displayString(revString);

}

function reverseString(userString) {

    //Start at the last index
    let startValue = userString.length - 1;
    let endValue = 0;

    let revString = "";

    //In a decremented for loop, the start value must be higher than the end value
    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i];
    };

    return revString

}

function displayString(revString) {

    return  Swal.fire({
        icon: 'success',
        title: 'Your Reversed String is:',
        text: `${revString}`,
    
    })

}