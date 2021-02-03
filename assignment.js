//https://github.com/smsabir/Javascript-problems

function kilometerToMeter(input){

    if(input < 0){
        return "Invalid input! Input should be greater than Zero."
    }
    var meter = input * 1000;
    return meter;
}
//console.log(kilometerToMeter(0.5));


function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    // Checking if there is any negative input. also rounding the fractions. 1.1 to 1 and 1.5+ to 2.
    if( Math.round(watch) < 0 || Math.round(phone) < 0 || Math.round(phone) < 0){
        return "Product(s) quantity cannot be negative or Zero."
    }
    totalBudget = Math.round(watch) * watchPrice + Math.round(phone) * phonePrice + Math.round(phone) * laptopPrice;
    return totalBudget;
}
//console.log(budgetCalculator(1, 1, 1)); */


function hotelCost(days){
    var exactDays = Math.ceil(days); // always counting extra few hours as a whole day. Like 1 days 5 hours = 2 days.
    if(exactDays < 0){
        return "Days cannot be negative!";
    }
    else{
        var rent = 100;
        var cost = 0;
        var remainingDays = 0;
        if(exactDays <= 10){
            cost = exactDays * rent;
        }
        else if(exactDays >= 11){
            cost = 10 * rent;
            remainingDays = exactDays - 10; // for calculating discount price for day 11-20;

            if(remainingDays > 0){
                var nextRemDays = remainingDays - 10; // to exclude days after 20th days. So from 11-20th.
                cost = cost + ((remainingDays-nextRemDays)*80); 

                if(nextRemDays > 0){
                    cost = cost + (nextRemDays*50); // from 21st to beyond. 
                }
            } 
        }
    }
    return cost;
}
//console.log(hotelCost(1.1));


function megaFriend(array){
    var large = 0;
    var mega;
    if(!Array.isArray(array) || array == 0){  // Checking if the array is an array or array is empty.
            return "Array cannot be empty / Not an array";
        }
    for(var i = 0; i <array.length; i++){
         if (array[i].length > large){
            large = array[i].length;  // storing the large name by checking all index.
            mega = array[i];
        }
    }
    return mega;
}
// var array = ["Asif", "Jamal", "Kalimuddin"];
// console.log(megaFriend(array));

