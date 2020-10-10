const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const codedLetters = expr.match(/.{1,10}/g);

  const decodedLetters = codedLetters.map((letter) => {
    if (/\*/.test(letter)) {
      return " ";
    }

    const trimmedLetter = letter.match(/1[01]*/)[0];

    const separatedLetterOnTwoSymbols = trimmedLetter.match(/.{1,2}/g);

    const morzedLetter = separatedLetterOnTwoSymbols
      .map((symbol) => {
        let morzedSymbol;

        if (symbol === "10") {
          morzedSymbol = ".";
        }

        if (symbol === "11") {
          morzedSymbol = "-";
        }

        return morzedSymbol;
      })
      .join("");

    const decodedLetter = MORSE_TABLE[morzedLetter];

    return decodedLetter;
  });

  return decodedLetters.join("");
}

module.exports = {
  decode,
};
