//Write your javascript code here

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let list = document.getElementById("faultyItems");
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let destination = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        destination.name,
        destination.diameter,
        destination.star,
        destination.distance,
        destination.moons,
        destination.image
      );
    });
});
