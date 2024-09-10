//Array of objects
const submissions = [
    {
    name: 'Jane',
    score: 95,
    passed: true
}, 
{
    name: 'Joe',
    score: 77,
    passed: true
}, 
{
    name: 'Jack',
    score: 59,
    passed: false
}, 
{
    name: 'Jill',
    score: 88,
    passed: true
}];

console.log(submissions);

//Add Submission function

const addSubmission = (array, newName, newScore) => {
    const newSub = {
        name: newName,
        score: newScore,
        passed: newScore >= 60 ? true : false
    };
    array.push(newSub);
}

addSubmission(submissions, 'Dawoud', 97);
addSubmission(submissions, 'Mustafa', 99);

console.log(submissions);

//Delete by Index using .splice method

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1); //removes 1 element from the designated array
}

deleteSubmissionByIndex(submissions, 0);

console.log(submissions);

//delete by name using splice and findIndex methods

const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(submission => submission.name === name); //findIndex method on array passed into the callback func
    if (index !== -1) {
        array.splice(index, 1); //splice method used 
    }
};

deleteSubmissionByName(submissions, 'Joe');

console.log(submissions);

//edit submission

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60 ? true : false;
};

editSubmission(submissions, 2, 100);

//find Sub by name using find method

const findSubmissionByName = (array, name) => {
    return array.find(submission => submission.name === name);
};

console.log(findSubmissionByName(submissions, 'Dawoud'));

//find lowest score

const findLowestScore = array => {
    let lowest = array[0]; //I started with index 0
    for (let i = 1; i < array.length; i++) { //iterates through the array
        if (array[i].score < lowest.score) { //compares lowest to each index
            lowest = array[i]; //updates lowest to the new index
        }
    }
    return lowest.score; //isolates and returns the VALUE of the 'lowest'
}

console.log(findLowestScore(submissions));

//find average score
//average score is the sum of all scores divided by the number of scores

const findAverageScore = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].score; //update the sum with the score from each iteration.
    }
    return sum / array.length; //calculate average using .length to get the number of scores entered.
};

console.log(findAverageScore(submissions));

//filter passing

const filterPassing = array => {
    return array.filter(sub => sub.score >= 60);
}

console.log(filterPassing(submissions));

//filter 90 +

const filter90AndAbove = array => {
    return array.filter(sub => sub.score >= 90);
};

console.log(filter90AndAbove(submissions));

//Extended Challenge
//count function! 
const createRange = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};

console.log(createRange(0, 10)); //counts 0 to 10