/*Make a for loop that logs out even numbers from 10 - 40.
However, if the number is divisible by 3 it should log to the console "This is divisible
by 3"
If it's divisible by 5 it should log "This is divisibleby 5"
If it's divisible by both 3 and 5 it should log "Jackpot!"
Hint: use the modulo operator (%) to figure out if two numbers are divisible. Make
sure the remainder is 0.
An example: 14 is divisible by 7, because 14 ÷ 7 =2 exactly. 11 is not divisible by 7.*/
for (let i= 10; i<= 40; i++ ){
    if(i%3 == 0)
    console.log("This is divisible by 3");
    else if (i%5 == 0)
    console.log("this divisible by 5")
    else
    console.log(i);
}