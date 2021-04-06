export function getPlant(id) {
  const storageValue = localStorage.getItem(id);
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  return null;
}

export function setPlant(id, newPlant) {
  localStorage.setItem(id, JSON.stringify(newPlant));
}

export function deletePlant(id) {
  localStorage.removeItem(id);
}

export function getAllKeys() {
  return Object.keys(localStorage);
}

export function getAllPlants() {
  return Object.values(localStorage).map((newPlant) => JSON.parse(newPlant));
}
