import categories from "./Categories.js";

export function allItems() {
    return Object.values(categories).flat()
}

export function byCategory(targetCategory) {
    return categories[targetCategory]
}
