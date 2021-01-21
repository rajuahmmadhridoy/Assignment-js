
/*  *******************************
    kilometer To Meter covert here
    ***************************** */

    
function kilometerToMeter(Meter){
    var oneKilo = 1000;
    var meter = Meter * oneKilo;
    return meter;
}

var kilo  = kilometerToMeter(3);





/*  ***********************
     budget Calculation here
    *********************** */



function budgetCalculator(watch, mobile, laptop) {

    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;

    var watchCost = watchPrice * watch;
    var mobileCost = mobilePrice * mobile;
    var laptopCost = laptopPrice * laptop;
    
    var totalCost = watchCost + mobileCost + laptopCost;

    return totalCost;
}
var budgetCost = budgetCalculator(20,10,8);



/*  *******************************
           Hotle Cost Start
    ***************************** */



function hotelCost(days) {


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
var tourDays = 21;
var totalHotelCost=hotelCost(tourDays);
console.log(totalHotelCost);




/*  *******************************
            Mega Friends start
    ***************************** */


function megaFriend(friends) {

    var mega = Friends[0];
    for(let i = 0 ; i < Friends.length ; i++) {
        var getFriend = Friends[i];
        if(getFriend.length > mega.length ){

            mega = getFriend;   
        }
    }
    return mega;
 }
 var bestFriends = ['Helal' ,'Raju Ahmmad Hridoy', 'sms saimoon bai', 'jalal bai' , 'Nurul Huda' , 'mustafizur','mh meheraj'];
 var myMegaFriend = megaFriend(bestFriends);