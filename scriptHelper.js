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
  if (testInput == "") return "Empty";
  return isNaN(testInput) ? "Is not a number" : "Is a number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
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

  list.style.visibility = "visible";
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
