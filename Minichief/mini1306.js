function simpleEncrypt(myString){
    var s = myString.Split('');
    var rexVowel = /[aiueo]/gi;
    
    for(var i=0;i< s.length;i++){
        c = myString.charAt(i);
        
        if(!s[i].match(rexVowel)){
            s[i] =s[i] + "o" +c;
        }
    }
    return s.join('').split(" o ").join("");
}