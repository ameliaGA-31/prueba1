function checkPalindrome(inputString) {
   var tamañoca = inputString.length;
    var i= 0;
    for ( i= 0;i< inputString.length; i ++) {
        if (inputString[i] !== inputString [tamañoca-1-i]){
         return false;   
        }
    }
        return true;
}        