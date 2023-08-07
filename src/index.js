const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': '**********',
};

function decode(expr) {
    const morseCodeArray = expr.match(/.{10}/g); 
    let decodedString = ""; 

    for (let i = 0; i < morseCodeArray.length; i++) {
        const letter = morseCodeArray[i];
        const morseLetter = letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
        if (morseLetter === "**********") {
            decodedString += " ";
        } else {
            decodedString += MORSE_TABLE[morseLetter];
        }
    }
    return decodedString.trim(); 
}

module.exports = {
    decode
}