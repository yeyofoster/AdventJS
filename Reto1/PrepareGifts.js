/**
 * AdventJS 
 * Reto 1 - PrepareGifts
 * Dificultad: Fácil
 */

const gifts = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts = prepareGifts(gifts);

console.log(`Gifts: ${gifts}`);
console.log(`Gifts after prepare: ${preparedGifts}`);

/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    return [... new Set(gifts)].sort((a, b) => a - b);
}