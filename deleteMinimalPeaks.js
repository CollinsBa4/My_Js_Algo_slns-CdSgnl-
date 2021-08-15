function deleteMinimalPeaks(numbers){
    let temp=[];
    let resultArray=[];
    numbers.push(0);
    numbers.unshift(0);
    while(numbers.length){
        if(numbers.length == 2){
            break;
        }
        for(let i = 0; i<numbers.length; i++){
            if(numbers[i]-numbers[i+1]>0 && numbers[i]-numbers[i-1]>0 ){
                   temp.push(i);
                   console.log(temp)
              }  
        } 
        let min=[Number.POSITIVE_INFINITY,0]
        for(let i = 0; i<temp.length; i++){
           if(numbers[temp[i]]<min[0]){
               min[0]=numbers[temp[i]];
               min[1]=temp[i];
           }
        }
         resultArray.push(min[0]) 
         temp=[]; 
         numbers.splice(min[1],1)
    }
    return resultArray;
    }
console.log(deleteMinimalPeaks([2,7,8,5,1,6,3,9]))
