3. Write a JavaScript program satisfying the following criteria:
Given five positive integers, find the minimum and maximum values that can be calculated by 
summing exactly four of the five integers. Then print the respective minimum and maximum values 
as a single line of two space-separated long integers.
Example
const arr = [1,3,5,7,9]
The minimum sum is 1+3+5+7=16  and the maximum sum is 3+5+7+9 = 24. The function prints “min 
= 16 and max = 24"

Solution:-


function minMaxSum(array) {
    var sum = array[0],
        min = array[0],
        max = array[0];
        
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }

    return [sum - max, sum - min];
}

console.log(minMaxSum([1, 3, 5, 7, 9]))

Carrer-App

Installtion

clone repo

git clone: https://github.com/subodhsingh5316/careers-task.git
Go app directory install dependancy

npm install
run app

npm start
