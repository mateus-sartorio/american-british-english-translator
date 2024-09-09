"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const text = req.body.text;
    const locale = req.body.locale;

    if (text === "") {
      res.status(200).json({ error: "No text to translate" });
      return;
    }

    if (!text || !locale) {
      res.status(200).json({ error: "Required field(s) missing" });
      return;
    }

    try {
      let result;
      if (locale === "american-to-british") {
        result = translator.translateToBritith(text);
      } else if (locale === "british-to-american") {
        result = translator.translateToAmerican(text);
      } else {
        res.status(200).json({ error: "Invalid value for locale field" });
        return;
      }

      res.status(200).json({
        text,
        translation: result,
      });
    } catch (e) {}
  });
};
