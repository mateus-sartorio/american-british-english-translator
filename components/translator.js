const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  customReplaceCallback(
    match,
    beforeSpace,
    matchedToken,
    afterSpace,
    replacementToken,
  ) {
    if (
      !(
        (beforeSpace === " " || beforeSpace == "") &&
        (afterSpace === " " || afterSpace === "" || /[.?!]/.test(afterSpace))
      )
    ) {
      return match;
    }

    const isCapitalized = matchedToken[0] === matchedToken[0].toUpperCase();

    let replacementTokenWithCorrectCapitalization = isCapitalized
      ? replacementToken.slice(0, 1).toUpperCase() + replacementToken.slice(1)
      : replacementToken;

    const replacementTokenWithSpan = `<span class="highlight">${replacementTokenWithCorrectCapitalization}</span>`;

    return beforeSpace + replacementTokenWithSpan + afterSpace;
  }

  translateToAmerican(input) {
    let output = input;

    for (let token in britishOnly) {
      if (output.toLowerCase().includes(token.toLowerCase())) {
        const regex = new RegExp(`(.?)(${token})(.?)`, "gi");

        output = output.replaceAll(
          regex,
          (match, beforeSpace, matchedToken, afterSpace) =>
            this.customReplaceCallback(
              match,
              beforeSpace,
              matchedToken,
              afterSpace,
              britishOnly[token],
            ),
        );
      }
    }

    for (let token in americanToBritishSpelling) {
      if (
        output
          .toLowerCase()
          .includes(americanToBritishSpelling[token].toLowerCase())
      ) {
        const regex = new RegExp(
          `(.?)(${americanToBritishSpelling[token]})(.?)`,
          "gi",
        );

        output = output.replaceAll(
          regex,
          (match, beforeSpace, matchedToken, afterSpace) =>
            this.customReplaceCallback(
              match,
              beforeSpace,
              matchedToken,
              afterSpace,
              token,
            ),
        );
      }
    }

    for (let token in americanToBritishTitles) {
      if (
        output
          .toLowerCase()
          .includes(americanToBritishTitles[token].toLowerCase())
      ) {
        const regex = new RegExp(
          `(.?)(${americanToBritishTitles[token]})(.?)`,
          "gi",
        );

        output = output.replaceAll(
          regex,
          (match, beforeSpace, matchedToken, afterSpace) =>
            this.customReplaceCallback(
              match,
              beforeSpace,
              matchedToken,
              afterSpace,
              token,
            ),
        );
      }
    }

    const britishTimeRegex = /\b([0-1]?[0-9]|2[0-3])\.([0-5][0-9])\b/g;
    output = output.replaceAll(
      britishTimeRegex,
      '<span class="highlight">$1:$2</span>',
    );

    return output === input ? "Everything looks good to me!" : output;
  }

  translateToBritith(input) {
    let output = input;

    for (let token in americanOnly) {
      if (output.toLowerCase().includes(token.toLowerCase())) {
        const regex = new RegExp(`(.?)(${token})(.?)`, "gi");

        output = output.replaceAll(
          regex,
          (match, beforeSpace, matchedToken, afterSpace) =>
            this.customReplaceCallback(
              match,
              beforeSpace,
              matchedToken,
              afterSpace,
              americanOnly[token],
            ),
        );
      }
    }

    for (let token in americanToBritishSpelling) {
      if (output.toLowerCase().includes(token.toLowerCase())) {
        const regex = new RegExp(`(.?)(${token})(.?)`, "gi");

        output = output.replaceAll(
          regex,
          (match, beforeSpace, matchedToken, afterSpace) =>
            this.customReplaceCallback(
              match,
              beforeSpace,
              matchedToken,
              afterSpace,
              americanToBritishSpelling[token],
            ),
        );
      }
    }

    for (let token in americanToBritishTitles) {
      if (output.toLowerCase().includes(token.toLowerCase())) {
        const regex = new RegExp(`(.?)(${token})(.?)`, "gi");

        output = output.replaceAll(
          regex,
          (match, beforeSpace, matchedToken, afterSpace) =>
            this.customReplaceCallback(
              match,
              beforeSpace,
              matchedToken,
              afterSpace,
              americanToBritishTitles[token],
              americanToBritishTitles[token],
            ),
        );
      }
    }

    const americanTimeRegex = /\b([0-1]?[0-9]|2[0-3]):([0-5][0-9])\b/g;
    output = output.replaceAll(
      americanTimeRegex,
      '<span class="highlight">$1.$2</span>',
    );

    return output === input ? "Everything looks good to me!" : output;
  }
}

module.exports = Translator;
