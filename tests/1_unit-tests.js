const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

const translator = new Translator();

suite("Unit Tests", () => {
  suite("American to British", () => {
    test("Translate Mangoes are my favorite fruit. to British English", function (done) {
      const input = "Mangoes are my favorite fruit.";
      const expectedOutput =
        'Mangoes are my <span class="highlight">favourite</span> fruit.';

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate I ate yogurt for breakfast. to British English", function (done) {
      const input = "I ate yogurt for breakfast.";
      const expectedOutput =
        'I ate <span class="highlight">yoghurt</span> for breakfast.';

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate We had a party at my friend's condo. to British English", function (done) {
      const input = "We had a party at my friend's condo.";
      const expectedOutput = `We had a party at my friend's <span class="highlight">flat</span>.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Can you toss this in the trashcan for me? to British English", function (done) {
      const input = "Can you toss this in the trashcan for me?";
      const expectedOutput = `Can you toss this in the <span class="highlight">bin</span> for me?`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate The parking lot was full. to British English", function (done) {
      const input = "The parking lot was full.";
      const expectedOutput = `The <span class="highlight">car park</span> was full.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Like a high tech Rube Goldberg machine. to British English", function (done) {
      const input = "Like a high tech Rube Goldberg machine.";
      const expectedOutput = `Like a high tech <span class="highlight">Heath Robinson device</span>.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate To play hooky means to skip class or work. to British English", function (done) {
      const input = "To play hooky means to skip class or work.";
      const expectedOutput = `To <span class="highlight">bunk off</span> means to skip class or work.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate No Mr. Bond, I expect you to die. to British English", function (done) {
      const input = "No Mr. Bond, I expect you to die.";
      const expectedOutput = `No <span class="highlight">Mr</span> Bond, I expect you to die.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Dr. Grosh will see you now. to British English", function (done) {
      const input = "Dr. Grosh will see you now.";
      const expectedOutput = `<span class="highlight">Dr</span> Grosh will see you now.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Lunch is at 12:15 today. to British English", function (done) {
      const input = "Lunch is at 12:15 today.";
      const expectedOutput = `Lunch is at <span class="highlight">12.15</span> today.`;

      const output = translator.translateToBritith(input);

      assert.equal(output, expectedOutput);

      done();
    });
  });

  suite("British to American", () => {
    test("Translate We watched the footie match for a while. to American English", function (done) {
      const input = "We watched the footie match for a while.";
      const expectedOutput = `We watched the <span class="highlight">soccer</span> match for a while.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Paracetamol takes up to an hour to work. to American English", function (done) {
      const input = "Paracetamol takes up to an hour to work.";
      const expectedOutput = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate First, caramelise the onions. to American English", function (done) {
      const input = "First, caramelise the onions.";
      const expectedOutput = `First, <span class="highlight">caramelize</span> the onions.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate I spent the bank holiday at the funfair. to American English", function (done) {
      const input = "I spent the bank holiday at the funfair.";
      const expectedOutput = `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate I had a bicky then went to the chippy. to American English", function (done) {
      const input = "I had a bicky then went to the chippy.";
      const expectedOutput = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
      const input = "I've just got bits and bobs in my bum bag.";
      const expectedOutput = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", function (done) {
      const input = "The car boot sale at Boxted Airfield was called off.";
      const expectedOutput = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Have you met Mrs Kalyani? to American English", function (done) {
      const input = "Have you met Mrs Kalyani?";
      const expectedOutput = `Have you met <span class="highlight">Mrs.</span> Kalyani?`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Prof Joyner of King's College, London. to American English", function (done) {
      const input = "Prof Joyner of King's College, London.";
      const expectedOutput = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Translate Tea time is usually around 4 or 4.30. to American English", function (done) {
      const input = "Tea time is usually around 4 or 4.30.";
      const expectedOutput = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Highlight translation in Mangoes are my favorite fruit.", function (done) {
      const input = "Mangoes are my favorite fruit.";
      const expectedOutput = `Everything looks good to me!`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Highlight translation in I ate yogurt for breakfast.", function (done) {
      const input = "I ate yogurt for breakfast.";
      const expectedOutput = `Everything looks good to me!`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Highlight translation in We watched the footie match for a while.", function (done) {
      const input = "We watched the footie match for a while.";
      const expectedOutput = `We watched the <span class="highlight">soccer</span> match for a while.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });

    test("Highlight translation in Paracetamol takes up to an hour to work.", function (done) {
      const input = "Paracetamol takes up to an hour to work.";
      const expectedOutput = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;

      const output = translator.translateToAmerican(input);

      assert.equal(output, expectedOutput);

      done();
    });
  });
});
