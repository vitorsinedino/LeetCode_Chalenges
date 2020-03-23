//made by João vitor Sinedino//

function largestPrefix(strs) {
    var prefix = "";
    if( strs.length > 0){
        prefix = strs[0]
        for(i = 0; i< strs.length; i++){
            for(j = 0; j < prefix.length; j++){
                if(strs[i][j] != prefix[j]){
                    prefix = prefix.slice(0,j);
                    break;
            }
        }      
    }
}
    return prefix;
}
