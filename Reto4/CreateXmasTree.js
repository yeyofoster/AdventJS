/**
 * AdventJS 
 * Reto 4 - Decorando el árbol de Navidad
 * Dificultad: Medio
 */


const height = 6;
const ornament = '*';
const xmasTree = createXmasTree(height, ornament);
console.log(xmasTree);

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = "";

    // For to add every level of the tree.
    for (let i = 1; i <= height; i++) {
        // Adding the first half of the tree.
        tree += "_".repeat(height - i);

        // Adding the ornaments.
        tree += ornament.repeat((i * 2) - 1);

        // Adding the second half of the tree.
        tree += "_".repeat(height - i) + "\n";
    }

    // Adding trunk.
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n";
    tree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1);

    return tree;
}

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTreeWithArray(height, ornament) {
    const tree = [];

    // Create the tree levels.
    for (let i = 1; i <= height; i++) {
        // Spaces on each side.
        const padding = "_".repeat(height - i);

        // Ornament layer.
        const level = ornament.repeat((i * 2) - 1);

        // Combine into one line.
        tree.push(padding + level + padding);
    }

    // Create the trunk.
    const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
    tree.push(trunk, trunk);

    // Join all lines with a newline character
    return tree.join("\n");
}