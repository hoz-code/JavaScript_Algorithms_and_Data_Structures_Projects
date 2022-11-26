function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function checkCashRegister(price, cash, cid) {
  let resultchangearr = []
  console.log(price + "<------- price")
  let change = cash - price;
  let auxchange = change
  console.log(cash + "<------- cash")
  console.log(change + "<------- change")
  let cidmoney = (cid.reduce((prev, curr) => prev + curr[1], 0)).toFixed(2)
  console.log(cidmoney + "<------- cash-in-drawer")
  if (cidmoney < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  }



  cid.map(a => {
    switch (a[0]) {
      case "PENNY":
        a.push(0.01)
        break;
      case "NICKEL":
        a.push(0.05)
        break;
      case "DIME":
        a.push(0.1)
        break;
      case "QUARTER":
        a.push(0.25)
        break;
      case "ONE":
        a.push(1)
        break;
      case "FIVE":
        a.push(5)
        break;
      case "TEN":
        a.push(10)
        break;
      case "TWENTY":
        a.push(20)
        break;
      case "ONE HUNDRED":
        a.push(100)
        break;
    }
  }) //finish map whom include currency to cid
  cid.reverse().forEach(money => {
    if (!(money[2] > change)) {
      if (money[1] != 0) {
        if (money[1] < change) {
          change = change - money[1]
          change = round(change, 2)
          
          resultchangearr.push(money.slice(0, 2))
        } else {
          resultchangearr.push([money[0], (Math.trunc(change / money[2])) * (money[2])])
          change = change - ((Math.trunc(change / money[2])) * (money[2]))
          change = round(change, 2)
        }
      }
    }
  })
  if (change != 0){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  if (auxchange == cidmoney){
    return {status: "CLOSED", change: cid}
  }

  
  return {status: "OPEN", change: resultchangearr}
}

console.log(


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

)
