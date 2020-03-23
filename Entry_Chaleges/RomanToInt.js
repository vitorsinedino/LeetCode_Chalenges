/**
 * @param {string} s
 * @return {number}
 */

 // João Vitor Sinedino //
var romanToInt = function(s) {
    var string = s.slice();
            var sum = 0;
            for(i = 0; i< string.length; i++){
                console.log(string[i]);
                switch(string[i]){
                    case 'I':
                      sum += 1;
                      break;
                    case 'V':
                        if(string[i-1] == 'I'){
                            sum += 3;
                            break;
                        }
                        else{
                            sum += 5;
                            break;
                        }
                        console.log(sum);
                        break;
                    case 'X':
                        if(string[i-1] == 'I'){
                            sum += 8;
                            break;
                        }
                        else if(string[i-1] == 'V'){
                            sum += 0;
                            break;
                        }
                        else{
                            sum += 10;
                            break;
                        }
                        console.log(sum);
                        break;
                    case 'L':
                        if(string[i-1] == 'I'){
                            sum += 48;
                            break;
                        }
                        else if(string[i-1] == 'V'){
                            sum += 40;
                            break;
                        }
                        else if(string[i-1] == 'X'){
                            sum += 30;
                            break;
                        }
                        else{
                            sum += 50;
                            break;
                        }
                        break;
                    case 'C':
                        if(string[i-1] == 'I'){
                            sum += 98;
                            break;
                        }
                        else if(string[i-1] == 'V'){
                            sum += 90;
                            break;
                        }
                        else if(string[i-1] == 'X'){
                            sum += 80;
                            break;
                        }
                        else if(string[i-1] == 'L'){
                            sum += 0;
                            break;
                        }
                        else{
                            sum += 100;
                            break;
                        }

                    case 'D':
                        if(string[i-1] == 'I'){
                            sum += 498;
                            break;
                        }
                        else if(string[i-1] == 'V'){
                            sum += 490;
                            break;
                        }
                        else if(string[i-1] == 'X'){
                            sum += 480;
                            break;
                        }
                        else if(string[i-1] == 'L'){
                            sum += 400;
                            break;
                        }
                        else if(string[i-1] == 'C'){
                            sum += 300;
                            break;
                        }
                        else{
                            sum += 500;
                            break;
                        }
                    case 'M':
                        if(string[i-1] == 'I'){
                            sum += 998;
                            break;
                        }
                        else if(string[i-1] == 'V'){
                            sum += 990;
                            break;
                        }
                        else if(string[i-1] == 'X'){
                            sum += 980;
                            break;
                        }
                        else if(string[i-1] == 'L'){
                            sum += 900;
                            break;
                        }
                        else if(string[i-1] == 'C'){
                            sum += 800;
                            break;
                        }
                        else if(string[i-1] == 'D'){
                            sum += 0;
                            break;
                        }
                        else{
                            sum += 1000;
                        }
                }
            }
    return sum;
};