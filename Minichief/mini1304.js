function sumArray(num1,num2,num3){
    var myArray =[];
    myArray.push(num1);
    myArray.push(num2);
    myArray.push(num3);
    
    var sum=0;
    for(var i=0; i< arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}