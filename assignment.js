// 



//kilometerToMeter function is starting from here
function kilometerToMeter(kilometer){
    if(kilometer<=0){

        //if kilometer is either 0 or negative value than it will run 
       
        return 'kilometer can not be a negative number or zero .  Input a valid number';
    }
    else{
        //if kilometer is a positive value than it will run 

        var meter = (kilometer*1000);  // 1 kilometer = 1000 meter

       return meter;
    }   
    }
    
    
    var kilometer = 55;

    console.log(kilometerToMeter(kilometer));

    //budgetCalculator function is starting from here

    function budgetCalculator(NoOfWatch,NoOfPhone,NoOfLaptop){

        if(NoOfWatch >0 && NoOfPhone >0 && NoOfLaptop>0){

            // if  number is given in positive than it will run 

            var neededMoneyWatch = NoOfWatch*50;  //each watch price is 50 unit

            var neededMoneyPhone = NoOfPhone*100; //each phone price is 100 unit

            var neededMoneyLaptop = NoOfLaptop*500; //each laptop price is 500 unit

            var totalMoney=neededMoneyWatch + neededMoneyPhone + neededMoneyLaptop; //total money is summation of all product
           
            return totalMoney;
        }
        else{

            // if a number is given in either 0 or negative than it will run  

            return 'input a valid number which is not negative or zero';
        }
     }
     
    
    var NoOfWatch = 20;
    var NoOfPhone = 10;
    var NoOfLaptop = 15;
    
    console.log(budgetCalculator(NoOfWatch,NoOfPhone,NoOfLaptop));


    //hotelCost function is starting from here

function hotelCost(totalDays){
   if(totalDays>0){
       //when total days is given in positive

            if(totalDays<=10){
                //when total number is within 10 days than it has only one phase 
                var totalCost = totalDays * 100;
                return totalCost;
            }
            else if(totalDays>10 && totalDays <=20){
                 //when total number of days  is within 20 days than it has total 2 phase 
                var phase2Days = totalDays-10;
                var phase1Days = totalDays-phase2Days;
                var phase2Cost = phase2Days*80;
                var phase1Cost = phase1Days*100;
                return phase1Cost +phase2Cost ;
            }
            else if( totalDays>20)
            {
                //when total number of days  is morethan 20 days than it has total 3 phase 

                var phase3Days =  totalDays-20; // total number of days  which is greater than 20

                var phase2Days = 10; //total number of days  which is smaller than 20 and  greater than 10
                
                var phase1Days = 10; //total number of days which is under 11 

                var phase3Cost = phase3Days*50; //counting the cost of phase3

                var phase2Cost = totalDays*80; //counting the cost of phase2

                var phase1Cost = totalDays*100; //counting the cost of phase1

                return phase1Cost+phase2Cost+phase3Cost; //total cost is summation of all phase cost

            }
   }
else{
    //when total days is not  given in positive than it will run

    return 'Days can not be a negative number or zero .Input positive number';
}




}
var totalDays = 11;

console.log(hotelCost(totalDays));


//megaFriend function is starting from here

function megaFriend(friends){
    
        if(friends.length>0){
            //if array isnot vacant than it will run
            var mega = friends[0];
            for(let i = 0;i<friends.length;i++){
                let name =friends[i];
                if(name.length>mega.length){
                    mega = name;
                }
            }
            return mega;

        }
        else{
            //if array is vacant than it will run
            return 'Array is vacant . ';
        }
}
var friends=['ariful','ahmed','mominul','reazuddin','reaz','mohammad'];

console.log(megaFriend(friends));