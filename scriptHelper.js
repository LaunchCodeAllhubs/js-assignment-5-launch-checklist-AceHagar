// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {

    if (testInput === "") {
        return "empty";
    } else if (isNaN(testInput)) {
        return "is not a number";
    } else {
        return "is a number";
    }
}





function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "empty" || validateInput(copilot) === "empty" || validateInput(fuelLevel) === "empty" || validateInput(cargoLevel) === "empty") {
        alert("All fields are required.");
    } else if (validateInput(pilot) === "is a number" || validateInput(copilot) === "is a number") {
        alert("Pilot and Co-pilot must be valid names");
    } else if (validateInput(fuelLevel) === "is not a number" || validateInput(cargoLevel) === "is not a number") {
        alert("Fuel level and Cargo mass must be numerical values");
    } else {
        let div = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        div.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000 || cargoLevel > 10000) {
            launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
            if (fuelLevel < 10000) {
                launchStatus.style.color = "red";
                fuelStatus.innerHTML = `Fuel level too low for launch`;
            }
            if (cargoLevel > 10000) {
                launchStatus.style.color = "#C7254E";
                cargoStatus.innerHTML = `Cargo Mass too great to launch`;
            }
        } else {
            launchStatus.style.color = "#419F6A";
            launchStatus.innerHTML = "Shuttle is ready for launch";
        }
    }
}


async function myFetch() {
    
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
        
    });
    //console.log(planetsReturned);
    return planetsReturned
}


function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
