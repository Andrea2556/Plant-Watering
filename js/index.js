import { setPlant, getAllPlants, getPlant } from "./localStoragePlants.js";
import { uuidv4 } from "./helpers.js";

const plantDesignWrapper = document.querySelector("#plantDesignWrapper");
const addButton = document.querySelector("#addButtonColor");

function attachClickEventOnPlants() {
  const rawPlantsHTML = document.querySelectorAll(".plants-characteristics");
  console.log(rawPlantsHTML);
  rawPlantsHTML.forEach((x) => {
    x.addEventListener("click", function (e) {
      console.log(e.currentTarget.id);
      const plantId = getPlant(e.currentTarget.id);
      console.log(plantId);
    });
  });
}

function createPlant() {
  const plantName = document.querySelector("#nameInputDesign");
  const location = document.querySelector("#locationInputDesign");
  const image = document.querySelector("#imageInputDesign");
  const interval = document.querySelector("#intervalInputDesign");
  const lastDay = document.querySelector("#lastDayInputDesign");

  const id = uuidv4();
  const data = {
    id,
    name: plantName.value,
    lastWatered: lastDay.value,
    waterInterval: interval.value,
    plantLocation: location.value,
    imgSrc: image.value,
  };
  setPlant(id, data);
}
addButton.addEventListener("click", () => {
  createPlant();
  initHTMLPlants();
  attachClickEventOnPlants();
});

function initHTMLPlants() {
  const allPlants = getAllPlants();
  let HTMLTemplatePlants = "";
  for (let plantIndex = 0; plantIndex < allPlants.length; plantIndex++) {
    HTMLTemplatePlants += getHTMLPlant(allPlants[plantIndex]);
  }
  plantDesignWrapper.innerHTML = HTMLTemplatePlants;
}

function getHTMLPlant(plant) {
  const {
    id = "",
    name = "",
    plantLocation = "",
    lastWatered = 0,
    waterInterval = 0,
    imgSrc = " ",
  } = plant;

  return `
    <div class = "plants-characteristics" id=${id} />
      <img class = "plants-characteristic_photo"  src = '${imgSrc}'/>
      <div class ="plants-info">
        <div class = "plants-wrapper">
          <div class = "plants-info__name">${name}</div>
          <div class = "plants-info__location">${plantLocation}</div>
        </div>
        <div class = "plants-info__watering">${lastWatered}</div>
      </div>
    </div>
    `;
}
initHTMLPlants();
attachClickEventOnPlants();
