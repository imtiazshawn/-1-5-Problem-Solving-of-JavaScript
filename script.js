// 0001 Print a Random number 1-6

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 6));




// 0002 Sort your Friends Names by Alphabetically


const myAllFriends = ['Anik', 'Sujon', 'Sabbir', 'Shawon', 'Tusher', 'Jihad', 'Tayim', 'Mahfuz',
                        'Rabbi', 'Arif', 'Parvez', 'Sojib', 'Talim Rabbi', 'Jahid'];

console.log(myAllFriends.sort());





// 0003 Sort Roll number of Students

const rollNumber = [12, 1, 5, 50, 55, 43, 34, 24, 27, 13, 7, 9, 33, 25];

console.log(rollNumber.sort(function(a, b){
    return a - b;
}));




// 0004. Check years leap year or not

function leapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
}
leapYear(2028);



// 0005. Find out how many vowels are there in sentence

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(Value){
        if(vowels.includes(Value)){
        count++;
        }
    });

    return count;
}

console.log(countVowels('The night is darkest just before the dawn, I promise you the dawn is coming'));