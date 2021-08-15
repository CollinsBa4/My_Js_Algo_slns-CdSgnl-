
  function oddOccurrencesOfZeros(a){

    let counter =0;
    let result =0;

    a.forEach(e=>{
         e= e.toString()
        a = e.split('')
        a.forEach(b=>{
            if(b==='0'){
                counter++
            }          
        })
        if(counter%2===1){
            result++;
            counter=0
        }
    })
    return result;
}

// console.log(oddOccurrencesOfZeros([20,11,10,10070,7]));