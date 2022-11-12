function rot13(str) {
    let array = str.split("")
    let codearry = array.map(letter => letter.charCodeAt())
   
  
    let decoarry = codearry.map(code => {
      if (code >= 65 && code <= 77){
        return code + 13
      }else if(code >= 78 && code <= 90){
        return code - 13
      }else{
        return code
      }
    })
  
    let letterarray = decoarry.map(okcode => String.fromCharCode(okcode))
    
    return letterarray.join("");
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");