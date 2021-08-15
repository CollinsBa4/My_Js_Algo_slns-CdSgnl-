function sumOfFirsts(numbers){
    let fnzi=0;
    let x;
    let finalResult = 0;
  for(let i=0; i<numbers.length; i++){
      if(numbers[i]>0){
          fnzi=i; x=numbers[i] 
      }else {
          return ; }
  }
  for(let i=fnzi; i<numbers.length;i++){
      if(numbers[i]<fnz){
        finalResult+=x;
      }else{
        finalResult+=x;
      }
  }

}
console.log(sumOfFirsts([5,5,5,5,5]))