



console.log('first');
console.log('second');
// console.log('third');
let number = 0;
const intervalId = setInterval(() => {
    // console.log(number++);


   

    // number++;
    // console.log(number);
    

    console.log(++number);




    if (number === 10) {
        clearInterval(intervalId);
    }


}, 1000);

console.log('fourth');
console.log('fifth');
