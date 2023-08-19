// Print odd numbers in an array

//  let values = [10,11,13,14,17,18,19,20,21,23];
//   (() => {
//    const result = values.filter((value) =>{
//        if(value % 2 !==0){
//            return true;
//       }
//    });
//    console.log('Result',result);
//   })();
//
//   Convert all the strings to title caps in a string array

//    function titleCase(str) {
//	 return str.toLowerCase().split(' ').map(function (word) {
//	 	return (word.charAt(0).toUpperCase() + word.slice(1));
//	  }).join(' ')
//     }
//       console.log(titleCase("guvi is a best"));

//  Sum of all numbers in an array

//     let arr = [12, 3, 4, 15];
    
//	function sum(arr) {
//		let sum = 0; 
//		for (let i = 0; i < arr.length; i++)
//			sum += arr[i];
			
//		return sum;
//	}

//  Return all the prime numbers in an array

     
//const lowerNumber = parseInt('Enter lower number: ');
//const higherNumber = parseInt('Enter higher number: ');

//console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
//   for (let i = lowerNumber; i <= higherNumber; i++) {
//    let flag = 0;

//    for (let j = 2; j < i; j++) {
//        if (i % j == 0) {
//            flag = 1;
//            break;
//        }
//    }
//
//    if (i > 1 && flag == 0) {
//        console.log(i);
//    }
//   }

//  Return all the palindromes in an array
     console.log(palindromeArray([1,2,2,1]));
     console.log(palindromeArray([1,2,2,2]));

    let palindromeArray = (arr) => {
	//initialize to true
	let isPalindrome = true;
	
	//loop through half length of the array
	for(let i = 0; i < arr.length / 2; i++) {

		//check if first half is equal to the second half
		if(arr[i] !== arr[arr.length - i - 1]){
		  isPalindrome = false; 
		  break;
		}
	}
	
	return isPalindrome;
}

//  Return median of two sorted arrays of the same size.
           
     
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
	document.write("Median is "+ getMedian(ar1, ar2, n1));
else
	document.write("Doesn't work for arrays of unequal size");

    
function getMedian(ar1, ar2, n)
{
	var i = 0; /* Current index of i/p array ar1[] */
	var j = 0; /* Current index of i/p array ar2[] */
	var count;
	var m1 = -1, m2 = -1;

	for (count = 0; count <= n; count++)
	{
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}

		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
	
		if (ar1[i] <= ar2[j])
		{
			m1 = m2; 
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2; 
			m2 = ar2[j];
			j++;
		}
	}

	return (m1 + m2)/2;
}


//   Remove duplicates from an array


var removeDuplicatesInPlace = function (arr) {
    var i, j, cur, found;
    for (i = arr.length - 1; i >= 0; i--) {
        cur = arr[i];
        found = false;
        for (j = i - 1; !found && j >= 0; j--) {
            if (cur === arr[j]) {
                if (i !== j) {
                    arr.splice(i, 1);
                }
                found = true;
            }
        }
    }
    return arr;
};

//  Rotate an array by k times
   
var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
leftRotate(arr, 2, 7);
printArray(arr, 7);

function leftRotate(arr , d , n) {
    for (i = 0; i < d; i++)
        leftRotatebyOne(arr, n);
}

function leftRotatebyOne(arr , n) {
    var i, temp;
    temp = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = temp;
}

/* utility function to print an array */
function printArray(arr , n) {
    for (i = 0; i < n; i++)
        document.write(arr[i] + " ");
}

 //arrow function (odd number).js
        const odd=() =>{
            let number=[1,2,3,4,5,6,7,8,9,10];
                for(i=0;i<number.length;i++){
                     if(number[i]%2!==0){
                   console.log(number[i]);
                } 
                }
            };
                odd();
	
 //arrow function (tittlecaps).js
  const tittlecaps=()=>{
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 }; 
 tittlecaps();
 
 //arrow function (sum of all number).js
     const sum=()=>{
        let str=[50,45,78];
           let sum=0;
         for (let i = 0; i < str.length; i++) {
           sum +=str[i];
         }
        console.log(sum);
        };
        sum();

 //arrow function (prime number).js
    const prime=()=>{
        var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
           
           numArray = numArray.filter((number) => {
             for (var i = 2; i <= Math.sqrt(number); i++) {
               if (number % i === 0) return false;
             }
             return true;
           });
           console.log(numArray);
       };
       prime();

 //arrow function (palindrome).js
    const ask=() =>{
    var myArray = ['dad', 'brother', 'honda', 'tamil'];   
   var b = myArray.filter(function(c,d,f){
   var Cur = c.split('').reverse().join('');
   if(c == Cur){
   console.log( myArray[d] );
   }
   });
   
 };ask();
        
 

