let mixedArray = ['PIZZA',10,true,25,false,'wings']

lowerCaseWords = ([...arr]) => {
    
    /* 
    ● Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
    */

let p1 = new Promise((resolve, reject) => {
    if (arr){
        resolve(arr)
        
    }else{
        reject("***errors***")
    }
})

p1.then(function(){
    let stringArr = []
for(let i=0;i < arr.length;i++){
    if (typeof(arr[i]) === 'string'){
        stringArr.push(arr[i].toLowerCase())
        
    }
}
console.log(stringArr)
})

p1.then(function(){
    let boolArr = [];
for(let i=0;i < arr.length;i++){
    if (typeof(arr[i]) === 'boolean'){
        boolArr.push(arr[i])
        
    }

}
console.log(boolArr)
})

p1.then(function(){
    let intArr = [];
for(let i=0;i < arr.length;i++){
    if (typeof(arr[i]) === 'number'){
        intArr.push(arr[i])
        
    }
}
console.log(intArr)
})


,(function(error){
    console.log(error)
}),(function(){
    console.log("finally")
})

console.log(p1);

  
}

lowerCaseWords(mixedArray);