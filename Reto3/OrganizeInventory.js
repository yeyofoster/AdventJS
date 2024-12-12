/**
 * AdventJS 
 * Reto 3 - Organizando el inventario
 * Dificultad: Fácil
 */

// const names = ['a', 'bb', 'ccc', 'dddd'];
const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

const organized = organizeInventory(inventory2);
console.log(JSON.stringify(organized));

/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const organized = {};

    for (const item of inventory) {
        // Validation to check if category exist.
        const currentCategory = organized[item.category];
        if (currentCategory) {
            // Validation to check if current item exist in the category.
            if (currentCategory[item.name]) {
                currentCategory[item.name] += item.quantity;
            } else {
                currentCategory[item.name] = item.quantity;
            }
        } else {
            organized[item.category] = {
                [item.name]: item.quantity
            };
        }
    }

    return organized;
}