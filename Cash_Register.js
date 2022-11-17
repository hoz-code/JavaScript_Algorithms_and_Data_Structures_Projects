function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    console.log(change +"<------- change")
    let cidmoney = (cid.reduce((prev, curr)=> prev + curr[1], 0)).toFixed(2)
    console.log(cidmoney+"<------- cash-in-drawer")
    let denominationarray = [0.01,0.05,0.1,0.25,1,5,10,20,100];
    let unitchange = denominationarray.map(currency => change/currency)
    console.log(unitchange)
    let denominationarrayindex = -1
    let unitcid = cid.map(cid => {
      denominationarrayindex = denominationarrayindex + 1;
      return Math.round(cid[1]/denominationarray[denominationarrayindex]);
      })
    console.log(unitcid)
   
  
  }
  
  checkCashRegister(3.26, 100, 
  [["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]])
  
  
  