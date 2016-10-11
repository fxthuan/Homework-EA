function filterLongWords(){
    Array.prototype.remove = function(value){
        var id = this.indexOf(value);
        if(id!= -1){
            return this.splice(id,1);
        }
        return false;
    }
    
    var myArray = ["linh","love","comfortable","hate","beautiful"];
    var maxLength = 5;
    var result = "";
    
    for(var i=0;i< myArray.length;i++){
        if(myArray[i].length > maxLength){
            
            myArray.remove(myArray[i]);
        }
    }
}