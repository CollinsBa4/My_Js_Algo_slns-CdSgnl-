function threeDivSubsequences(number){
    
    let result = [];
    let counter=0;
    result.push(number)
    for(let i = 0; i<number.length; i++){
        result.push(number.substring(0,i+1))
    }
    result.forEach(e=>{
        if(+e %3===0){
            counter++;
        }
    })
    return counter;

   
}
console.log(threeDivSubsequences('6666'))