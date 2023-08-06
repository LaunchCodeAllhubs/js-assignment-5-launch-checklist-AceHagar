
// Write your JavaScript code here


window.addEventListener("load", function () {

    let form = document.querySelector("form");
    let list= document.getElementById("faultyItems");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let pilot = pilotInput.value;
        let copilot = copilotInput.value;
        let fuelLevel = fuelLevelInput.value;
        let cargoLevel = cargoMassInput.value;
        
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    })

    


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.        
        let destination = pickPlanet(listedPlanets);
        let name = destination.name;
        let diameter = destination.diameter;
        let star = destination.star;
        let distance = destination.distance;
        let moons = destination.moons;
        let imageUrl = destination.image;
        
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    });

});