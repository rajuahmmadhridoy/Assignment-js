
/*  *******************************
    kilometer To Meter covert here
    ***************************** */

    
function kilometerToMeter(Meter){
    var oneKilo = 1000;
    var meter = Meter * oneKilo;
    if(Meter < 0){
        var error = "distance cannot be negative";
        return error;
    }
    return meter;
}

var kilo  = kilometerToMeter(2);




/*  ***********************
     budget Calculation here
    *********************** */



function budgetCalculator(watch, mobile, laptop) {
    if(watch && mobile && laptop < 0){
        var error = "distance cannot be negative";
        return error;
    }
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;

    var watchCost = watchPrice * watch;
    var mobileCost = mobilePrice * mobile;
    var laptopCost = laptopPrice * laptop;
    
    var totalCost = watchCost + mobileCost + laptopCost;

    return totalCost;
  
}
var budgetCost = budgetCalculator(10,8,5);



/*  *******************************
           Hotle Cost Start
    ***************************** */



function hotelCost(days) {
    if(days < 0){
        var error = "distance cannot be negative";
        return error;
    }

    if(days <=10) {
       var totalCost = 100 * days;
        return totalCost;
    }
    else if(days <=20) {
         var firstCost = 100 * 10;
         var offer = 20;
         var remaining = days - 10;
         var costForOffer = 100 - offer;
         var secondCost = remaining * costForOffer;
         var totalCost = firstCost + secondCost;

        return totalCost ;
    }
    else {
         var firstCost = 100 * 10 ;
         var secondCost = (100-20) * 10;
         var offer = 50;
         var costForOffer = 100 - offer;
         var remaining = days - 20;
         var thirdCost = remaining * costForOffer;
         var totalCost = firstCost + secondCost + thirdCost;
        
        return totalCost;
    }

}
var reserveDays = 21;
var totalHotelCost=hotelCost(reserveDays);




/*  *******************************
            Mega Friends start
    ***************************** */


function megaFriend(Friends) {

    if(Friends.length <= 0){
        var error = "distance cannot be negative";
        return error;
    }

    var megaFriends = Friends[0];
    for(var i = 0 ; i < Friends. length; i++) {
        var getFriend = Friends[i];
        if(getFriend.length > megaFriends.length ){

            megaFriends = getFriend;   
        }
    }
    return megaFriends;
 }
 var bestFriends = ['Helal' ,'Raju Ahmmad Hridoy', 'sms saimoon bai', 'jalal bai' , 'Nurul Huda' , 'mustafizur','mh meheraj'];
 var myMegaFriend = megaFriend(bestFriends);

 