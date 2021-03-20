import { uuidv4 } from "./helpers.js";

const plantDesignWrapper = document.querySelector("#plantDesignWrapper");
// const imageUrl = document.querySelector(".imageURL");
const name = document.querySelector("#nameInputDesign");
const location = document.querySelector("#locationInputDesign");
const url = document.querySelector("#imageInputDesign");
const interval = document.querySelector("#intervalInputDesign");
const lastDay = document.querySelector("#lastDayInputDesign");
const addButton = document.querySelector("#addButtonColor");

export function createPlant(data) {
  data = {
    name: name.value,
    lastWatered: lastDay.value,
    waterInterval: interval.value,
    imgSrc: url.value,
    plantLocation: location.value,
  };
  editPlant(uuidv4(), data);
}
{
  const addButtonHere = addButton.addEventListener(
    "click",
    () => (console.log("clicked"), (data = {})),
    createPlant(data)
  );
  export { addButtonHere };
  {
    const id = uuidv4();
    localStorage.setItem(
      id,
      JSON.stringify({
        id,
        name,
        lastWatered,
        waterInterval,
        imgSrc,
        plantLocation,
      })
    );
  }
}

export function getPlant(id) {
  const storageValue = localStorage.getItem(id);
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  console.log(getPlant);
  return undefined;
}

export function editPlant(id, newPlant) {
  localStorage.setItem(id, JSON.stringify(newPlant));
}

export function deletePlant(id) {
  localStorage.removeItem(id);
}

export function getAllPlants() {
  return Object.values(localStorage).map((x) => JSON.parse(x));
}

// export const loadImage = imageUrl.addEventListener("load", function () {
//   let myImage = document.createElement("myImage");
//   imgContext = myImage.getContext("2d");

//   myImage.width = imageUrl.width;
//   myImage.height = imageUrl.height;

//   imgContext.drawImage(imageUrl, 0, 0, imageUrl.width, imageUrl.height);

//   let imgAsDataUrl = imageUrl.toDataURL("image/png");
//   localStorage.setItem("imageUrl", imgAsDataUrl);
// });

export function initHTMLPlants() {
  const allPlants = getAllPlants();
  let HTMLTemplatePlants = "";
  for (let plantIndex = 0; plantIndex < allPlants.length; plantIndex++) {
    HTMLTemplatePlants += getHTMLPlant(allPlants[plantIndex]);
  }
  console.log(HTMLTemplatePlants);
  plantDesignWrapper.innerHTML = HTMLTemplatePlants;
}

export function getHTMLPlant(plant) {
  const {
    name = "",
    plantLocation = "",
    lastWatered = 0,
    waterInterval = 0,
    imgSrc = " ",
  } = plant;
  return `
  <div class = "plants-characteristics">
  <img class = "plants-characteristic_photo">${imgSrc}></div>
  <div class = "plants-characteristic_name">${name}</div>
  <div class = "plants-characteristic_location>${plantLocation}</div>
  <div class = "plants-characteristic_interval>${waterInterval}</div>
  <div class = "plants-characteristic_watering>${lastWatered}</div>
  </div>
  `;
}
