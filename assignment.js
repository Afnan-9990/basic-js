// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000
    return meter;
}


// budgetCalculator
function budgetCalculator(watch, phone, laptop){
    if(watch>=0 && phone>=0 && laptop>=0){
    var watchValue = watch * 50;
    var phoneValue = phone * 100;
    var laptopValue = laptop * 500;
    var totalValue = watchValue + phoneValue + laptopValue;
    return totalValue;
    }
    else{
        return "Item can not be negetive.";
    }
}


// hotelCost
function hotelCost(day){
    var amount = 0;
    if(day<=10){
        amount = day * 100;
    }
    else if(day<=20){
        var first10Days = 10 * 100;
        var remaining = day - 10;
        var second10Days = remaining * 80;
        amount = first10Days + second10Days;
    }
    else{
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = day - 20;
        var anyDayAfter20Days = remaining * 50;
        amount = first10Days + second10Days + anyDayAfter20Days;
    }
    return amount;
}


 // megaFriend
 function megaFriend(arr){
    var value =0;
    for (var i=0;i<arr.length;i++){ 
      if(arr[i].length>value){ 
       value = arr[i].length;
        var biggest = arr[i];
      }
    }
    return biggest;   
  }





