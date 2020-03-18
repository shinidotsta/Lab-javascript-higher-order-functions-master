
//### Function #1: Array Slice
const foods = ["pizza", "burger","fingerChips","donuts","springRoll"];
let modifiedFood=foods.slice(1,4);
console.log(modifiedFood);

//### Function #2: Array Splice
let modifiedFood = foods.splice(2,0,"noodles", "icecream");
console.log(foods);

//### Function #3: Filter
//even number
const numberArray = [12,324,213,4,2,3,45,4234];
/*
var isEven=numberArray.map(function(index,item,numarray)
{
return item%2&1;
});
*/
let isEven=numberArray.filter(function(num)
{
    return num%2==0;

});
console.log(isEven);
//prime numbers

function isprime(num)
{
    var flag = true;
    for(let i = 2; i <= num/2; i++)
    {
        if(num%i == 0)
        {
            flag = false;
            console.log(flag)
            return flag;
        }
    }
    return flag;
}
let prime=numberArray.filter(function(num)
{
return isprime(num)==true;
});

//### Function #4: Reject
let nonPrime=numberArray.filter(function(num)
{
    return isprime(num)==false;
})

//### Function #5: Lambda
numberArray.filter(num=>num%2===0);


//### Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers=myArray.map(function(item)
{
return item*item;
});

//### Function #7: Reduce
const myArray=[2, 3, 5, 10];
let multiply=myArray.reduce(function(acc,init)
{
  return acc*init;  
},1);
