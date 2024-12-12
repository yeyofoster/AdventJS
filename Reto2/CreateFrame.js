/**
 * AdventJS 
 * Reto 2 - Framing names
 * Dificultad: Fácil
 */

// const names = ['a', 'bb', 'ccc', 'dddd'];
const names = ['midu', 'madeval', 'educalvolpz'];
const frame = createFrame(names);
console.log(frame);


/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    let maxNameLength = 0;
    let frame = "";

    // First for get the maximum length of names.
    for (const name of names) {
        maxNameLength = Math.max(maxNameLength, name.length);
    }

    // Add the top frame.
    frame += "*".repeat(maxNameLength + 4);
    frame += "\n";

    // Second for to construct the frame.
    for (const name of names) {
        frame += '* ' + name + " ".repeat(maxNameLength - name.length) + " *\n";
    }

    // Add the bottom frame.
    frame += "*".repeat(maxNameLength + 4);

    return frame;
}