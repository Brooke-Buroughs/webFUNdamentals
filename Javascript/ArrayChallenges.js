/* 1.Always Hungry */
function alwaysHungry(arr){
    var sum=0;
    for (i=0; i<arr.length; i++){
        if (arr[i]=="food"){
            console.log('yummy');
        }
        else{
            sum++;
        }
    }
    if (sum==arr.length){
        console.log("I'm Hungry")
    }
}

alwaysHungry([3.14,"food","pie", true, "food"]);
alwaysHungry([4,1,5,7,2]);

/* 2.High Pass Filter */
function highPass(arr, cutoff){
    var filteredArr=[];
    for (a=0; a<arr.length; a++){
        if (arr[a]>5){
            filteredArr.push(arr[a]);
        }
    }
    return filteredArr;
}

var result = highPass([6,8,3,10,-2,5,9],5);
console.log(result); 

/* 3.Better than average */
function betterThanAverage(arr){
    var sum=0;
    for (e=0; e<arr.length; e++){
        sum += arr[e];
    }
    var avg= sum/arr.length;
    var count=0;
    for (o=0; o<arr.length; o++){
        if (arr[o]>avg){
            count++;
        }
    }
    return count;
}

var result0 = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result0); 

/* 4.Array Reverse */
function reverse(arr){
    for (u=0; u<arr.length/2; u++){
        var temp=arr[u];
        arr[u]=arr[arr.length-1 - u];
        arr[arr.length-1 - u]=temp;
    }
    return arr;
}

var result1 = reverse(["a","b","c","d","e"]);
console.log(result1); 

/* 5.Fibonacci Array */
function fibonacciArray(n){
    var fibArr=[0,1];
    for (var b=2; b<n; b++){
        fibArr.push(fibArr[b-2]+fibArr[b-1])
    }
    return fibArr;
}

var result2 = fibonacciArray(10);
console.log(result2); 

