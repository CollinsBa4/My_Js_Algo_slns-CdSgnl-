function deleteMinimalPeaks(numbers){
    let result= [];
    let tempResult=[];
    
        function deleter(arr){
            let peak;
            let counter=0
            arr.forEach((e,i)=>{
                peak=e;
                if(arr[i+1] && arr[i+1]>e){
                    peak=arr[i+1];
                }else if(arr[i+1]<peak){
                    counter

                }
            })

        }
    

}