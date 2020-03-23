/**
 * @param {number} x
 * @return {number}
 */
//made by : Jõao vitor sinedino
var reverse = function(x) {
    var rev = 0;
   
    while(x != 0 ){
        var last = x % 10;
        rev = (rev * 10) + last;
        x = parseInt(x/10);
       
   }
    if(rev > Math.pow(2, 31) || rev < -(Math.pow(2, 31))){
        return 0
    }
    else{
        return rev;
    }
    
};