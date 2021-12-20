const scrabbleScore = require("./scrabble-score");

describe("scrabble score", () => {
  it("should score 'a' correctly", () => {
    expect(scrabbleScore("a")).toBe(1);
  });
});
