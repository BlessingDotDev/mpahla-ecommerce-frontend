export let itemId = JSON.parse(localStorage.getItem('itemid')) || [];

export function saveToStorage() {
  localStorage.setItem('itemid', JSON.stringify(itemId));
}

export function removeFromStorage() {
  localStorage.removeItem('itemid');
  itemId = [];
}

export function saveitemId(productId) {
  removeFromStorage();
  itemId.push(productId);
  saveToStorage();
}