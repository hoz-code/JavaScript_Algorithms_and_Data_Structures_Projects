function convertToRoman(num) {
    let arraynum = num.toString().split("")
    let romanarray
    let okromanarray
    romanarray = arraynum.reverse().map((num, index) => {
      switch(index){
        case 0:
          switch(num){
            case "0":
              return ""
            break;  
            case "1":
              return "I" 
            break;  
            case "2":
              return "II"
            break;  
            case "3":
              return "III"
            break;  
            case "4":
              return "IV"
            break;  
            case "5":
              return "V"
            break;
            case "6":
              return "VI"
            break;  
            case "7":
              return "VII"
            break;
            case "8":
              return "VIII"
            break;  
            case "9":
              return "IX"
            break; 
  
          }//switch(num)
        break; //case 0
        case 1:
          switch(num){
            case "0":
              return ""
            break;  
            case "1":
              return "X" 
            break;  
            case "2":
              return "XX"
            break;  
            case "3":
              return "XXX"
            break;  
            case "4":
              return "XL"
            break;  
            case "5":
              return "L"
            break;
            case "6":
              return "LX"
            break;  
            case "7":
              return "LXX"
            break;
            case "8":
              return "LXXX"
            break;  
            case "9":
              return "XC"
            break; 
          }//switch(num)
        break; //case 1
        case 2:
          switch(num){
            case "0":
              return ""
            break;  
            case "1":
              return "C" 
            break;  
            case "2":
              return "CC"
            break;  
            case "3":
              return "CCC"
            break;  
            case "4":
              return "CD"
            break;  
            case "5":
              return "D"
            break;
            case "6":
              return "DC"
            break;  
            case "7":
              return "DCC"
            break;
            case "8":
              return "DCCC"
            break;  
            case "9":
              return "CM"
            break; 
          }//switch(num)
        break; //case 2
        case 3:
          switch(num){
            case "0":
              return ""
            break;  
            case "1":
              return "M" 
            break;  
            case "2":
              return "MM"
            break;  
            case "3":
              return "MMM"
            break;  
          }//switch(num)
        break; //case 3
      }//switch(index)
    })
    okromanarray = romanarray.slice().reverse()
    return okromanarray.join("");
  }
  
  convertToRoman(649);