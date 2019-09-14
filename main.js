let today = new Date();
let month = new Array();
month[0] = "January"
month[1] = "February"
month[2] = "March"
month[3] = "April"
month[4] = "May"
month[5] = "June"
month[6] = "July"
month[7] = "August"
month[8] = "September"
month[9] = "October"
month[10] = "November"
month[11] = "December"

let m = today.getMonth();
let date = today.getDate() + " " + month[m] + " , " + today.getFullYear();
document.getElementsByClassName("date")[0].textContent = date;

document.getElementById("main-unit").addEventListener("keyup", () => {
    let m = document.querySelector(".main-unit-options");
    let s = document.querySelector(".second-unit-options");
    let mainUnit = m.options[m.selectedIndex].textContent.toLowerCase();
    let secondUnit = s.options[s.selectedIndex].textContent.toLowerCase();

    let numberTyped = document.getElementById("main-unit").value;


    numberTyped = parseInt(numberTyped);


    if (mainUnit === "celsius") {
        if (secondUnit === "kelvin") {
            document.getElementById("second-unit").value = numberTyped + 273.15;
        } else if(secondUnit==="farenheight") {
            document.getElementById("second-unit").value=(numberTyped *9/5) +32;
                } else {
            document.getElementById("second-unit").value=numberTyped;
                }

    } else if (mainUnit==="kelvin"){
        if(secondUnit==="celsius"){
            document.getElementById("second-unit").value=numberTyped -  273.15;
        }else if(secondUnit==="farenheight") {
            document.getElementById("second-unit").value=(numberTyped -273.15) * 9/5 +32; 
                } else {
            document.getElementById("second-unit").value=numberTyped;
                }
    }else if (mainUnit==="farenheight"){
        if(secondUnit==="celsius"){
            document.getElementById("second-unit").value=(numberTyped-32)*5/9;
        }else if(secondUnit==="kelvin") {
            document.getElementById("second-unit").value=(numberTyped -32) * 5/9+273.15;
                } else {
            document.getElementById("second-unit").value=numberTyped;
                }
            }
}
)