
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    //let input = document.getElementById("input").value;
    //input.toLowerCase();
    
    let day = new Date();
    let weekday = day.getDay();

    
    let weekdays = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    let input = weekdays[day.getDay()];
    
    
    let output = document.getElementById("output");
    
    switch (input) {
        case "måndag":
            output.innerHTML = " ";
            output.insertAdjacentHTML("afterbegin", "Idag är det måndag och till lunch serveras fiskpinnar med potatismos.");            
            break;
        
        case "tisdag":
            output.innerHTML = " ";
            output.insertAdjacentHTML("afterbegin", "Idag är det tisdag och till lunch serveras korv med makaroner.");
            break;
        
        case "onsdag":
            output.innerHTML = " ";
            output.insertAdjacentHTML("afterbegin", "Idag är det onsdag och till lunch serveras spagetti med köttfärssås.");
            break;

        case "torsdag":
            output.innerHTML = " ";
            output.insertAdjacentHTML("afterbegin", "Idag är det torsdag och till lunch serveras ärtsoppa och pannkakor.");
            break;

        case "fredag":
            output.innerHTML = " ";
            output.insertAdjacentHTML("afterbegin", "Idag är det fredag och till lunch serveras tacos.");
            break;

        default:
            output.innerHTML = " ";
            output.insertAdjacentHTML("afterbegin", "Resturangen är stängd, vänligen välj en annan dag");
    }

});

