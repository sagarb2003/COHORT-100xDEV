/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let a=0;
    for(let i=0;i<n;i++){
        a+=i;
    }
    return a;
}

const before=new Date();
const beforeTime=before.getTime();
calculateTime(100);
const after = new Date();
const aftereTime = after.getTime();

console.log(aftereTime-beforeTime);

// function stopWatch(){
//     const curr=new Date();
//     console.log(curr.getHours() + "H" + curr.getMinutes() + "M" + curr.getSeconds() + "S");
// }
// setInterval(stopWatch,1000);
