import scrabbleScore from "./scrabble-score";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

describe("scrabble score", () => {
  it("should score 'a' correctly", () => {
    expect(scrabbleScore("a")).toBe(1);
  });
});
