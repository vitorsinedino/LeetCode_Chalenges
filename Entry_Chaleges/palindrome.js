/**
 * @param {number} x
 * @return {boolean}
 */
 //made by Vitor Sinedino
var isPalindrome = function(x) {
    var rev = 0;
    var y = x;
    while(x > 0){
        last = x % 10;
        rev = (rev * 10) + last;
        x = parseInt(x/10);
    }
    if(y == rev){
        return true;
    }
    else{
        return false;
    }
};