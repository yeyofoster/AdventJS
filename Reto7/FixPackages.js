/**
 * AdventJS 
 * Reto 7 - El ataque del Grinch
 * Dificultad: Medio
 */

const package = "a(bc(def)g)h";
const fixedPackage = fixPackages(package);
console.log(fixedPackage);

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    const stack = [];

    for (const char of packages) {
        if (char === ')') {
            const tempArray = [];
            // Collecting characters until we find an open parenthesis.
            while (stack.length && stack[stack.length - 1] !== '(') {
                tempArray.push(stack.pop());
            }

            // Remove the open parenthesis.
            stack.pop();

            // Push the reversed substring back into the stack.
            stack.push(...tempArray);
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}