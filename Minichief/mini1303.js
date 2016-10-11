function maxArray(a,b){
    var myArray =[];
    myArray.push(a);
    myArray.push(b);
    var big="";
    
    
    myArray.forEach(function(eachElement){
                    if(isNaN(eachElement)){
                    console.log("wrong type");
       }else{
           big= Math.max.apply(Math, myArray);
              }
                    });
             return big;
}