function findOddWords(str1, str2){
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(!arr2.includes(arr1[i]) && !arr1.includes(arr2[j])){
                result.push(arr1[i]);
                result.push(arr2[j]);
            }
        }
    }
    return result;
}

console.log(findOddWords('This is a test','This is a normal'));