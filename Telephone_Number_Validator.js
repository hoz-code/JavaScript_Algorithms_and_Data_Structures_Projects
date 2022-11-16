function telephoneCheck(str){
    if(/(^(1\s)(\(\d{3}\)\s)(\d{3}\-\d{4})$)/.test(str)){
      //console.log("1 (555) 555-5555")
      return true
    }else if(/(^(1\s)(\d{3}\s)(\d{3}\s\d{4})$)/.test(str)){
      //console.log("1 555 555 5555")
      return true
    }else if(/(^(1)(\(\d{3}\))(\d{3}\-\d{4})$)/.test(str)){
       //console.log("1(555)555-5555")
       return true
    }else if(/(^(1\s)(\d{3}\-)(\d{3}\-\d{4})$)/.test(str)){
       //console.log("1 555-555-5555")
       return true
    }else if(/(^(\(\d{3}\))(\d{3}\-\d{4})$)/.test(str)){
       //console.log("(555)555-5555")
       return true
    }else if(/(^(\d{3}\-)(\d{3}\-\d{4})$)/.test(str)){
       //console.log("555-555-5555")
       return true
    }else if(/(^\d{10}$)/.test(str)){
       //console.log("5555555555")
       return true
    }else{
      return false
    }
   }
   telephoneCheck("(555)555-5555");