const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

suite("Functional Tests", () => {
  test("You can POST to /api/translate with a body containing text with the text to translate and locale with either american-to-british or british-to-american. The returned object should contain the submitted text and translation with the translated text.", function (done) {
    const inputPayload = {
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british",
    };

    const output = {
      text: "Mangoes are my favorite fruit.",
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.deepEqual(res.body, output);

        done();
      });
  });

  test('The /api/translate route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English. The span element should wrap the entire time string, i.e. <span class="highlight">10:30</span>', function (done) {
    const inputPayload = {
      text: "Lunch is at 12:15 today.",
      locale: "american-to-british",
    };

    const output = {
      text: "Lunch is at 12:15 today.",
      translation: 'Lunch is at <span class="highlight">12.15</span> today.',
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.deepEqual(res.body, output);

        done();
      });
  });

  test('The /api/translate route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English.', function (done) {
    const inputPayload = {
      text: "Dr. Grosh will see you now.",
      locale: "american-to-british",
    };

    const output = {
      text: "Dr. Grosh will see you now.",
      translation: '<span class="highlight">Dr</span> Grosh will see you now.',
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.deepEqual(res.body, output);

        done();
      });
  });

  test('Wrap any translated spelling or terms with <span class="highlight">...</span> tags so they appear in green.', function (done) {
    const inputPayload = {
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british",
    };

    const output = {
      text: "Mangoes are my favorite fruit.",
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.deepEqual(res.body, output);

        done();
      });
  });

  test("If one or more of the required fields is missing, return { error: 'Required field(s) missing' }", function (done) {
    const inputPayload = {
      locale: "american-to-british",
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Required field(s) missing");

        done();
      });
  });

  test("If text is empty, return { error: 'No text to translate' }", function (done) {
    const inputPayload = {
      text: "",
      locale: "american-to-british",
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "No text to translate");

        done();
      });
  });

  test("If locale does not match one of the two specified locales, return { error: 'Invalid value for locale field' }", function (done) {
    const inputPayload = {
      text: "Ceci n'est pas une pipe",
      locale: "french-to-american",
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "error");
        assert.equal(res.body.error, "Invalid value for locale field");

        done();
      });
  });

  test('If text requires no translation, return "Everything looks good to me!" for the translation value', function (done) {
    const inputPayload = {
      text: "SaintPeter and nhcarrigan give their regards!",
      locale: "british-to-american",
    };

    const output = {
      text: "SaintPeter and nhcarrigan give their regards!",
      translation: "Everything looks good to me!",
    };

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(inputPayload)
      .end((_err, res) => {
        assert.equal(res.status, 200);

        assert.isObject(res.body);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.deepEqual(res.body, output);

        done();
      });
  });
});
