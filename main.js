let randomNum = Math.floor(Math.random()*100)


console.log(randomNum);

if(randomNum  % 15 == 0 ) {

    console.log("FizzBuzz");
} else if ( randomNum % 3 == 0) {
    console.log("FIZZ");
} else if(randomNum % 5 == 0) {
    console.log("BUZZ");
}