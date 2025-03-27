function findPair (arr){
  //O(n^2) because the time it takes to run the function is proportional to the square of the size of the input
  //if the input is 5, it will take 25 iterations to find the pair
  // for nested for O(n^2)
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            console.log("Pair:" + arr[i] + "," + arr[j]);
            }
        }
    }

const numbers = [1, 2, 3, 4, 5];
findPair(numbers);