import categories from "./Categories.js";

export function allItems() {
    return Object.values(categories).flat()
}

export function getByCategory(targetCategory) {
    return categories[targetCategory]
  }
