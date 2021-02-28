import { uuidv4 } from "./helpers.js";

export function createPlant({ name, lastWatered, waterInterval, imgSrc }) {
  const id = uuidv4();
  localStorage.setItem(
    id,
    JSON.stringify({ id, name, lastWatered, waterInterval, imgSrc })
  );
}

export function getPlant(id) {
  const storageValue = localStorage.getItem(id);
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  return undefined;
}

export function editPlant(id, newPlant) {
  localStorage.setItem(id, JSON.stringify(newPlant));
}

export function deletePlant(id) {
  localStorage.removeItem(id);
}
