// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value.
//
// IMPORTANT: Make sure your function returns "equal" if the two numbers are equal.
// You might want to use an if/elseif/else statement for this.
//
// Then make 3 console logs calling your maxOf2 function inside each one.
// The first console log should print 5.
// The second console log should print "equal".
// The third console log should print -3.

var five=maxOf2(5,4)
var equal=maxOf2(5,5)
var neg3=maxOf2(-6,-3)


function maxOf2(a, b){
    if(a>b)
    return(a)
    if(a<b)
    return(b)
    else
    return("equal")
}

console.log(five)
console.log(equal)
console.log(neg3)
