
// Write your JavaScript code here





window.addEventListener("load", function () {

    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        let pilot = pilotInput.value;
        let list;
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
        console.log(listedPlanets);
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
    })

});