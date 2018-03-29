//Exact Change
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
function checkCashRegister(price, cash, cid) {
  
  var expectedChange= cash-price;

  var x = cash-price;//dummy value
  
  var cleanChange= [];
  
  var change=  [["ONE HUNDRED",0.00],
               ["TWENTY",0.00],
               ["TEN",0.00],
               ["FIVE",0.00],
               ["ONE",0.00],
               ["QUARTER",0.00],
               ["DIME",0.00],
               ["NICKEL",0.00],
               ["PENNY",0.00]
              ];
  
 
    var times=  [cid[0][1]/0.01,//PENNY
               Math.round(cid[1][1]/0.05),//NICKEL
               cid[2][1]/0.10,//DIME
               cid[3][1]/0.25,//QUARTER
               cid[4][1]/1.00,//ONE
               cid[5][1]/5.00,//FIVE
               cid[6][1]/10.0,//TEN
               cid[7][1]/20.0,//TWENTY
               cid[8][1]/100.0//ONE HUNDRED
              ];
    times= times.reverse();
  
 
  


 while(x!==0){
switch(true) {
    
        //100
        case (x >= 100 && times[0]!==0):
       
        break;
        //20
        case (x>=20 && times[1]!==0):
        times[1] -= 1;//removing 1 quarter coin from cash register
        change[1][1]+=20;//adding 1 quarter coin to change
        x-=20;
        break;
        //10
        case (x>=10 && times[2]!==0):
        times[2] -= 1;//removing 1 quarter coin from cash register
        change[2][1]+=10;//adding 1 quarter coin to change
        x-=10;
        break;
        //5
        case (x>=5 && times[3]!==0)://keeps going after 15 dollars.
        times[3] -= 1;//removing 1 quarter coin from cash register
        change[3][1]+=5;//adding 1 quarter coin to change
        x-=5;
    
        break;
        //1
        case (x>=1 && times[4]!==0):
        times[4] -= 1;//removing 1 quarter coin from cash register
        change[4][1]+=1;//adding 1 quarter coin to change
        x-=1;
        break;
        //0.25
        case (x>=0.25 && times[5]!==0):
        times[5] -= 1;//removing 1 quarter coin from cash register
        change[5][1]+=0.25;//adding 1 quarter coin to change
        x-=0.25;
        break;
        //0.1
        case (x>=0.10 && times[6]!==0):
        times[6] -= 1;//removing 1 quarter coin from cash register
        change[6][1]+=0.1;//adding 1 quarter coin to change
        x-=0.1;
        break;
        //0.05
        case (x>=0.05 && times[7]!==0):
        times[7] -= 1;//removing 1 quarter coin from cash register
        change[7][1]+=0.05;//adding 1 quarter coin to change
        x-=0.05;
        break;
        //0.01
        case (x>=0.01 && times[8]!==0):
          x= Math.round(x * 100) / 100;
 
        times[8] -= 1;//removing 1 quarter coin from cash register
        change[8][1]+=0.01;//adding 1 quarter coin to change
        x-=0.01;

        break;
}
  }
  


  
  //removing array elements with 0 values
change.forEach(function(element) {
  if(element[1]){
    var z = element;
    cleanChange.push(z);
  }
});
  

  
  //Innsufficient funds.
 if(cleanChange[0][1]===0.01){
   return "Insufficient Funds";
 }
  
  //Closed
   if(cleanChange[0][1]!==0.01){
     if(times.every(el => el===0)){
   return "Closed";
     }
 }

  return cleanChange;

}

