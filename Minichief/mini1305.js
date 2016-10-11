function findVowel(letter){
    var vowels =["a","i","u","e","o"];
    
    for(var i=0;i< vowels.length;i++){
        if(letter===vowels[i]){
            return true;
        }
    }
    return false;
}