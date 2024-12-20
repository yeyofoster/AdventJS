/**
 * AdventJS 
 * Reto 6 - ¿Regalo dentro de la caja?
 * Dificultad: Medio
 */

const box1 = [
    "####",
    "#* #",
    "#  #",
    "####"
];

const box2 = [
    "#####",
    "#   #",
    "#  #*",
    "#####"
];

const giftInBox = inBox(box1);
console.log(giftInBox);

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    // Skip top and bottom margins.
    for (let i = 1; i < box.length - 1; i++) {
        const row = box[i];
        const giftIndex = row.indexOf('*');

        // Check if not on left or right margins.
        if (giftIndex > 0 && giftIndex < row.length - 1) {
            return true;
        }
    }
    return false;
}