
                function checkForUniqueCharacters(str){
                    const strArr = Array.from(str);
                    strArr.sort();
                    for(i=0; i<strArr.length-1; i++){
                        
                        if(strArr[i] == strArr[i+1])
                        {
                            return false;
                        }
                    }
                    return true;
                }
            var hasUniqueCharacters = checkForUniqueCharacters("keval");
            console.log(hasUniqueCharacters);
            