
// KILO-METER TO METER
function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    if(kilo<0){
        var negetive = "Error : it's not a postive value. You should input postive value"
        return negetive;
    }
    return meter;
}
// BUDGET CALCULATOR
function budgetCalculator(clock,mobile,laptop){
    var clockCost = clock * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var total = clockCost + mobileCost + laptopCost;
    if(clock<0 || mobile<0 || laptop<0){
        var minusProduct = "Error : products quantity can't be minus"
        return minusProduct;
    }
    return total;
}
// HOTEL COST
function hotelCost(day){
   var  totalCost = 0;
   if(day<0){
       var notInHotel = "Error : you should input a positive value";
        return notInHotel;
   }
    if(day<=10){
        totalCost = day * 100;
    }else if(day<=20){
       var firstTen = 100 * 10;
        var secondTen = (day - 10) * 80;
        totalCost = firstTen + secondTen;
    }else{
        var firstTen = 100 * 10;
        var secondTen = 80 * 10;
        var thirdTen = (day - 20) * 50;
        totalCost = firstTen + secondTen + thirdTen;
    }
    return totalCost;
}
// MEGA FRIEND
function megaFriend(arr){
    var max = arr[0];
    var maximum = max.length
    for(var i=0; i<arr.length;i++){
        var element = arr[i];
        var elementLength = element.length
        if(maximum < elementLength){
           max  = element;
        }
        
    }
    return max;
}


