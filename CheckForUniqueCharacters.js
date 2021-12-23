             
                function checkForUniqueCharacters(str){
                    var strSet = new Set(str); // Time Complexity = O(n) where n is length of str

                    if(str.length == strSet.size){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            
            var hasUniqueCharacters = checkForUniqueCharacters("milin");
            console.log(hasUniqueCharacters);
          