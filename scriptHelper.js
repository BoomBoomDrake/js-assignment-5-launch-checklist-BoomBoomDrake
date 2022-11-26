// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
  if (testInput == "") return "Empty";
  return isNaN(testInput) ? "Is not a number" : "Is a number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatusText = document.getElementById("launchStatus");
  let launchStatus = {
    fuelValid: false,
    cargoValid: false,
  };

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  // Guard clauses
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  )
    return alert("All fields are required.");
  if (
    validateInput(pilot) === "Is a number" ||
    validateInput(copilot) === "Is a number"
  )
    return alert("Invalid name.");
  if (
    validateInput(fuelLevel) === "Is not a number" ||
    validateInput(cargoLevel) === "Is not a number"
  )
    return alert("Invalid input.");

  // Successful validation
  list.style.visibility = "visible";
  pilotStatus.innerHTML = `Pilot ${pilot} ready for launch`;
  copilotStatus.innerHTML = `Co-Pilot ${copilot} ready for launch`;
  if (fuelLevel >= 10000) {
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    launchStatus.fuelValid = true;
  } else {
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    launchStatus.fuelValid = false;
  }
  if (cargoLevel <= 10000) {
    cargoStatus = `Cargo mass low enough for launch`;
    launchStatus.cargoValid = true;
  } else {
    cargoStatus = `Cargo mass too high for launch`;
    launchStatus.cargoValid = false;
  }
  if (launchStatus.fuelValid && launchStatus.cargoValid) {
    launchStatusText.style.color = "green";
    launchStatusText.innerHTML = `Shuttle Ready For Launch`;
  } else {
    launchStatusText.style.color = "red";
    launchStatusText.innerHTML = "Shuttle Not Ready For Launch";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * (planets.length - 1))];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
