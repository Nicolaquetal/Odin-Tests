function caesarCipher (entry){
/*A = 65, Z = 90, a= 97, z = 122 */

    
    let res = ""
    for (let e in entry){
        let x = entry[e]
        
        if(x.charCodeAt()>=65 && x.charCodeAt()<=90 ){
            x = String.fromCharCode(65+ (x.charCodeAt()-65+1)%26)
        }

        else if(x.charCodeAt()>=97 && x.charCodeAt()<=122){
            x = String.fromCharCode(97+ (x.charCodeAt()-97+1)%26)
        }
        res = res +x
    }
    return res
}

   /*console.log(caesarCipher ("A:"))*/
  
  
 module.exports = caesarCipher;