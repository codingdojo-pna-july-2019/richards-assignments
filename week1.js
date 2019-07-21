// // Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// var arr = [1,2,3,4,5,6,7,8,9,10]

function pushFront(array,value) {
    for (var i = array.length; i > 0; i--) {
        var placeHolder = array[i-1];
        console.log('index is ' + i);
        array[i] = placeHolder;
    }
    array[0] = value;
    console.log(array)
    return array
}
// pushFront(arr,8)

// // Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// function popFront(array){
//     return removeAt(array, 0);
//     // var placeHolder = array[0]
//     // for (var i = 0; i < array.length; i++) {
//     //     var lookingAt = array[i + 1];
//     //     console.log('looking at ' + lookingAt)
//     //     array[i] = lookingAt
//     //     console.log('set index to ' + array[i])
//     // }
//     // array.pop()
//     // console.log(array)
//     // return placeHolder;
// }

// popFront(arr)


// // Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// function insertAt(array,position,value) {
//     for( var index = array.length; index > position; index--) {
//         var placeHolder = array[index - 1];
//         array[index] = placeHolder;
//     }
//     array[position] = value;
//     return array
// }
// console.log(insertAt(arr, 3, 25));


// // Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(array, position) {
    var placeHolder = array[position];
    for (var i = position; i < array.length; i++) {
        var lookingAt = array[i + 1];
        console.log('looking at ' + lookingAt)
        array[i] = lookingAt
        console.log('set index to ' + array[i])
    }
    array.length--
    return placeHolder;
}
// console.log(removeAt(arr,6))


function swapPairs(array) {
    for (var i = 0; i < array.length/2; i++){
        var temp = array[i]
        array[i] = array[array.length-i-2];
        array[array.length-i-2] = temp
        if (array[i] === array[1]-1) {
            continue
        }
    } return array
  }
// console.log(swapPairs(arr))

// function removeDupes(array) {
//     var placeHolder = array.length -1
//     for (var index = 0; index < array.length; index++){
//         if ( array[index] == array[index + 1] ) {
//             array[index + 1] = array[index + 2]
//             array[array.length -1] = placeHolder
//             console.log(array)
//         }
//     }
//     array.length -=2;
//     return array
// }
// console.log(removeDupes([1,1,3,4,5,5]));

function minToFront(array) {
    var min = 0;
    for (var i = 1; i < array.length; i++) {
        if ( array[i] < array[min]) {
            min = i;
        }
    }
    var tempVar = removeAt(array, min);
    pushFront(array,tempVar)
    console.log('min position is ' + min)
}
// console.log(minToFront([5,2,5,6,1]))

function reverse(array) {
    for (var i = 0; i < array.length/2; i++){
        var temp = array[i]
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = temp
        if (array[i] === array[1]-1) {
            continue
        }
    } return array
  }
// console.log(reverse(arr))
// [1,2,3,4,5,6,7,8,9,10]
function rotate(array, shift) {
    while (shift < 0) {
        shift += array.length;
    }
    shift = shift % array.length;
    console.log('shifting by', shift)
    for (var index = 0; index < shift; index++ ) {
        console.log('initiating rotation');
        var lastdigit = array.pop()
        pushFront(array, lastdigit)
    }
    return array;
}

// console.log(rotate([1,2,3,4,5,6,7,8,9,10], 1))

// function filterRange(array, min, max) {
//     var lengthAtStart = array.length-1;
//     shrinkToNewArray = max - min + 1;
//     for (var index = 0; index < shrinkToNewArray; index++) {
//         console.log('setting value of ',array[index] + ' to ' + array[ min + index])
//         array[index] = array[min + index]; //set current index to min plus whatever index is at now 0, 1, 2, 3, until max is hit
//     }
//     for (var index = lengthAtStart; index >= shrinkToNewArray; index--) {
//         // take whats left which would be length = 7 (indexed) minus the values between min and max which is 5 
//         console.log('removing value of ' + array[index])
//         array.pop()

//     } return array
// }

// console.log(filterRange([1,2,3,4,5,6,7,8], 4, 6))
function concatArr(firstArray, secondArray) {
    // set arrays in a variable then push the second array to the new first array
    for ( var index = 0; index < secondArray.length ; index++ ) {
            insertValue = secondArray[index]
            firstArray[firstArray.length] = insertValue
    }
    return firstArray
}
// console.log(concatArr([1,2,3],[4,5,6]))

// function skyline(array) {
//      var low = 0;
//      var high = 0;
//     for (var index = 0; index < array.length; index++) {
//         if (array[index] > 0) {

//     }
// }
function removeNegatives(array) {
    for (var index = 0; index < array.length; index++) {
        if ( array[index] < 0) {
            console.log('located a negative entering loop ' + array[index]) // start from this position to shrink array
            for (var i = index; i < array.length; i++) {
                console.log('for loop entered starting at ' + array[i])
                array[i] = array[i + 1] // shrink the array
            }
            array.pop()
        }
    }
    return array   
}
// console.log(removeNegatives([-1,2,3,-4,5,-10]))

function secondToLast(array) {
    for (var index = 0; index < array.length; index++) {
        if ( array.length < 2) {
            return null;
        
        }
        return array[array.length-2]
        }
    }
// console.log(secondToLast([1,3,5,6,9]))

function secondLargest(array) {
    if (array.length < 2) {
        return null;
    }
    var highestNum = 0;
    for (var index = 0; index < array.length; index++) {
        if ( array[index] > highestNum) {
            highestNum = array[index]
            console.log(highestNum)
        }
        
    }
    var secondHighNum = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[index] < highestNum && array[index] > secondHighNum) {
            console.log(' got into conditional ', array[index])
            secondHighNum = array[index];
        }
    }return secondHighNum
}
// console.log(secondLargest([12,40,13,-10, 41]))

function nthPosition(array, position) {
    if (array.length < position) {
        return null;
    }
    return array[array.length - position]

}
// console.log(nthPosition([1,2,3,4,6,7,8,9], 4))

function nthLargest( array, n) {
    if (array.length < n) {
        return null
    }
    nthNum = 0;
    for (var index = 0; index < array.length; index++) {
        count = 0
        var placeHolder = array[index];
        for(var i = 0; i < array.length; i++){
            if(array[i] > placeHolder){
                count++;
            }
        }
        if (count == n-1) {
            return placeHolder
        }
    }
}

// console.log(nthLargest([1,20,30,40,100,8], 4))

// fisher-Yates shuffle algo
function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        let i = Math.floor(Math.random() * (index + 1));
        [array[index], array[i]] = [array[i], array[index]]
    }
    return array
}
// console.log(shuffle([3,4,7,5,8,1,3,2,9]))

function removeRange(array, min, max) {
    for (var index = max; index >= min; index--) {
        array[index] = array[index + 1]
        array.pop(array.length)

    } return array
}
// console.log(removeRange([1,2,3,4,56,6,7,8,9,910], 4,8))

function insertAt(array,position,value) {
        for( var index = array.length; index > position; index--) {
            var placeHolder = array[index - 1];
            array[index] = placeHolder;
        }
        array[position] = value;
        return array
    }

function addSums(array) { // will call insertAt for values
    var sum = 0;
    for (var index = 0; index < array.length; index++) {
        if (array.length - index > 9) { // Handles the length of the index so that it counts to 9 then inserts at 10
            sum = 0;
            for ( var i = index; i < index + 10; i++) {
                sum = array[i] + sum; //counting sums of all numbers
            }
            insertAt(array, i, sum);
            index = i; // storing index
        }
        else{
            var sum = 0
            for (var x = index; x < array.length; x++) {
                sum = array[x] + sum;
            }
            array.push(sum);
            return array
        }
    }
}
// x = addSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2])
// console.log(x)

// function copyFunctionSpliceMethod(arr) {
//         var index = 0
//         for(var i = 0; i < arr.length; i+=2) {
//             if (arr[i] == arr[i]) {
//                 arr.splice(i, 0, arr[i])
//             }
            
//         }return arr;
//     }
    // testCase = copyFunctionSpliceMethod([1,'echo','echo','say what?'])
    // console.log(testCase);
// array1 = [1,2];
// array2 = [10,20,30,40];
// function zipIt(array1, array2) {
//     var newArr = [];
//     var figureMaxLength = Math.max(array1.length,array2.length);
//     for ( var index = 0; index < figureMaxLength; index++ ){
//         if (index < array1.length) {
//             newArr.push(array1[index]);
//         }
//         if (index < array2.length) {
//             newArr.push(array2[index])
//         }
//     } return newArr
// }
// console.log(zipIt(array1,array2))

//Remove Blanks
function removeBlanks(str) {
    var strArray = str.split(" ")
    console.log(strArray)
    return strArray.join("")
}

// console.log(removeBlanks("Pl ayTha tF u nkyM usi c "))

//Get Digits
// function getDigits(string) {
//     var convertStr = string.split("");
//     var numsOnly = []
//     for ( var i = 0; i < convertStr.length; i++) {
//         if (!isNaN(convertStr[i])) {
//             numsOnly.push(convertStr[i])
//         }
//        console.log(numsOnly) 
//     }
//     return numsOnly.join("")
// }
// // console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// //Acronyms
// function acronyms(string) {
//     var stringToArray = string.split(" ")
//     var acro = []
//     for ( index = 0; index < stringToArray.length; index++) {
//         stringToArray[index].split("")
//         acro.push(stringToArray[index][0])
        
//     }
//     return acro.join("")
// }
// console.log(acronyms("there's no free lunch - gotta pay yer way."));
// console.log(acronyms("Live from New York, it's Saturday Night!"))


// testCase = "Honey pie, you are driving me crazy"
// var string = testCase.split(" ")

// var newString = string.join("")
// console.log(newString.length)

function removeShortStrings(string, len) {
    var converStr = string.split(" ")
    for ( var index = 0; index < converStr.length; index++) {
        if (converStr[index].length < len) {
            removeAt(converStr, index)
        }
    }
    return converStr
}
// console.log(removeShortStrings("Honey pie, you are driving me crazy",3))

function parensValidation(str) {
    var open = 0;
    var closed = 0;
    for( var index = 0; index < str.length; index++) {
        if (str[index] == "(") {
            open++;
        }
        if (str[index] == ")") {
            closed++;
            if (open >= closed) {
                open--;
                closed--;
            }
            if ( open < closed ) {
                return false
            }
        }
    }
    if ((open %2 === 0 ) && (closed %2 === 0)) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(parensValidation("Y(3(p)p(3)r)s"))
// console.log(parensValidation("N(0(p)3"))
// console.log(parensValidation("N(0)t )0(k"))

function bracesValid(string) {
    var turnToArray = string.split("")
    console.log(turnToArray)
    var evalString = [];
    for ( var index = 0;index < turnToArray.length; index++) {
        switch(turnToArray[index]) {
            case '(' : evalString.push(turnToArray[index]); break;
            console.log(evalString)
            case '{' : evalString.push(turnToArray[index]); break;
            console.log(evalString)
            case '[' : evalString.push(turnToArray[index]); break;
            console.log(evalString)
            case ')' : evalString.pop(); console.log(evalString); break;
            console.log(evalString)
            case '}' : evalString.pop(); break;
            console.log(evalString)
            case ']' : evalString.pop(); break;
        }
    }
    if (evalString.length == 0) {
        return true
    }
    else {
        return false
    }
}
// console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
// console.log(bracesValid("D(i{a}l[ t]o)n{e"))
// console.log(bracesValid("A(1)s[O (n]0{t) 0}k"))
function strictPal(string) {
    var turnToArray = string.split("")
    var arrRev = []
    for ( var index = turnToArray.length-1; index >= 0; index--) {
        arrRev.push(turnToArray[index]);
    }
    for ( var i = 0; i < turnToArray.length; i++) {
        console.log(arrRev)
        console.log(turnToArray)
        if ( arrRev[i] !== turnToArray[i]) {
            console.log(arrRev[i],turnToArray[i])
            return false
        }
    }
    return true
}
// console.log(strictPal("Able was I, ere I saw Elba"))
// console.log(strictPal("a x a"))
// console.log(strictPal("Madam, I'm Adam"))
// console.log(strictPal("racecar"))
// console.log(strictPal("Dud"))
// console.log(strictPal("oho!"))
function zipEmUp(array1, array2) {
    var combinedArray = {}
    for ( var index = 0 ; index < array1.length ; index++) {
        combinedArray[array1[index]] = array2[index]
    } return combinedArray
}
// console.log(zipEmUp(["abc", 3, "yo"],[42, "wassup", true])) //{3: "wassup", abc: 42, yo: true}

function invertHash(assocArr) {
    newArr = {}
    for (value in assocArr) {
        console.log('Getting the value ', assocArr)
        newArr[assocArr[value]] = value
        console.log('Setting the value ', assocArr[value])
    } return newArr
  }
//   console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}))

function NumbersOfValues(assocArr) {
    var count = 0
    for ( value in assocArr) {
        count++
    } return count
}
// console.log(NumbersOfValues({band: "Travis Shredd & the Good Ol’ Homeboys", style: "Country/Metal/Rap", album: "668: The Neighbor of the Beast"}))