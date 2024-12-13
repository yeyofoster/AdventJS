/**
 * AdventJS 
 * Reto 5 - Emparejando botas
 * Dificultad: Fácil
 */

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
const pairOfShoes = organizeShoes(shoes);
console.log(pairOfShoes);

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const pairs = [];
    const leftShoes = [];
    const rightShoes = [];

    // First for to separate left shoes from right shoes.
    for (const shoe of shoes) {
        if (shoe.type === 'I') {
            leftShoes.push(shoe.size);
        } else {
            rightShoes.push(shoe.size);
        }
    }

    // Second for to find the corresponding pair using left shoes.
    for (const left of leftShoes) {
        const indexOfRightShoe = rightShoes.indexOf(left);
        if (indexOfRightShoe != -1) {
            pairs.push(left);
            rightShoes.splice(indexOfRightShoe, 1);
        }
    }

    return pairs;
}