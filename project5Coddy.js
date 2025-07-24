let age=12
let height=160
let adult_supervision=true
let ride_roller_coaster=""
if (age>=12){
    if (height>150){
        if (age<15){
            if (adult_supervision){
                ride_roller_coaster="You can ride with adult supervision!"
            }else{
                ride_roller_coaster="Sorry, you need an adult with you"
            } 
        }else{
            ride_roller_coaster="You can ride by yourself!"
        }
        }else{
            ride_roller_coaster="Sorry, you're not tall enough"
        }
    }else{
        ride_roller_coaster="Sorry, you're too young"
    }
console.log(ride_roller_coaster)
