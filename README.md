# Test driven development (TDD)

Test driven development means writing tests first, before writing code. The tests define what the code should do. Then you write code to pass the tests. Writing tests first helps you think through what the code needs to do. It also helps make sure the code stays organised and easy to change later. We'll use Vitest to write and run tests easily.

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about TDD! Here's a glimpse of what you'll be achieving by the end of this workshop:

- Object 1: Write software using a TDD approach
- Object 2: Applying the TDD cycle (red -> green -> refactor)
- Object 3: Having a disciplined focus on writing the simplest, minimal working implementation to pass a failing test

## 🤝 Team Programming

When completing this workshop in your teams, use a ping-pong approach to pair programming. One person writes the failing test, another writes the code to pass it. Discuss the tests and implementations, and provide constructive feedback to each other. This helps you learn from different perspectives and improve your coding skills.

## 🎟️ TICKETS

Your manager has tasked you with creating a `calculateScrabbleWordScore` function that takes in a word and returns a correctly calculated scrabble score for that word.

- Your tests will go in `scrabble-score.test.js`.
- Your implementation will go in `scrabble-score.js`. If you look there, the required functions have already been created and exported for you.

The scores for each letter are as follows:

| Letter | Score |
| ------ | ----- |
| A      | 1     |
| B      | 3     |
| C      | 3     |
| D      | 2     |
| E      | 1     |
| F      | 4     |
| G      | 2     |
| H      | 4     |
| I      | 1     |
| J      | 8     |
| K      | 5     |
| L      | 1     |
| M      | 3     |
| N      | 1     |
| O      | 1     |
| P      | 3     |
| Q      | 10    |
| R      | 1     |
| S      | 1     |
| T      | 1     |
| U      | 1     |
| V      | 4     |
| W      | 4     |
| X      | 8     |
| Y      | 4     |
| Z      | 10    |

To give a couple of examples of how this table works:

- The word `I` would be worth 1 point (`I -> 1`)
- The word `ICED` would be worth 7 points (`I C E D -> 1 + 3 + 1 + 2`)

We'll keep extending the functionality in small increments.

**Remember the discipline:** Write the simplest and minimal test for a failing test case. Then write the simplest and minimal code/implementation to pass the failing test. Don't read ahead, don't try to predict what the code might need later.

Time to dive into action! 🏊‍♂️ Here's what you'll be working on:

### 🎫 Ticket 1 - Setup

Install Vitest as a dev dependency. If you need a refresher, search online for how to install Vitest and how to have it run your tests.

#### 🧪 Using Vitest

Vitest is a testing framework that allows you to write and run tests easily. In this project, we use Vitest to ensure our code works as expected. You can learn more about Vitest [here](https://vitest.dev/).

### 🎫 Ticket 2 - Single letters

1. Write a new test that checks whether `calculateScrabbleLetterScore` correctly calculates the score for the word `A`.
   - Once you've written the test, run the tests with Vitest.
   - The test you wrote should fail at first. This is because you wrote the test before writing the code to make it pass.
   - This is the "red" stage in the TDD cycle (red -> green -> refactor)
2. Now add the simplest code you can to the `calculateScrabbleLetterScore` function. Make it return the right score for the letter `A` to pass the failing test.
   - Once you've updated the implementation, run the tests again.
   - This time the test should pass (if your implementation is correct).
   - This is the "green" stage in the TDD cycle (red -> green -> refactor)
3. Look over the code. Make changes to simplify or improve it if you can. When you're done with changes, run the tests again. This checks that your changes didn't break anything.
   - This is the "refactor" stage in the TDD cycle (red -> green -> refactor)
4. Now repeat steps 1-3 for the remaining letters (i.e. `B`, `C`, `D` and so forth up to and including `Z`).
   - **Optional:** Writing all these tests might feel repetitive. You could try using Vitest's `test.each` method ([docs](https://vitest.dev/api/#test-each)) to avoid repeating code. Look at the `.each` examples to see how it works. Try using it in your tests. If you spend too much time on `.each`, just write the tests without it, even if you repeat code.

#### Summary 🔄 TDD Cycle

The TDD cycle consists of three stages:

1. **Red:** Write a failing test.
2. **Green:** Write the simplest code to pass the test.
3. **Refactor:** Improve the code while ensuring tests still pass.

Example:

- **Red:** Write a test for `calculateScrabbleLetterScore('A')` expecting a score of 1.
- **Green:** Implement `calculateScrabbleLetterScore` to return 1 for 'A'.
- **Refactor:** Simplify the code if possible, ensuring the test still passes.

**Remember the discipline of writing the simplest code to meet the current requirements.** Don't try to predict what the code might need later.

### 🎫 Ticket 3 - Input validation

1. Write a new test to ensure the function throws an error if any of the characters in the word given are outside of A-Z. You can use `.toThrowError` ([Vitest docs](https://vitest.dev/api/expect.html#tothrowerror)) to catch and check the error. The test should currently fail.

2. Update the implementation to make the failing test pass. You can use the `throw` statement in JS to deliberately throw/cause an error: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#description

3. Refactor where/if needed and then re-run the tests to make sure they still pass after your changes.

### 🎫 Ticket 4 - Bonus score

A new requirement has come in.

> If a player uses all seven tiles, they should score a bonus of 50 points on top of the word score.

Go through the TDD process (write a failing test -> update the implementation so that the test passes -> refactor where/if needed) to support/meet this requirement.

### 🎫 Ticket 5 - Case insensitivity

A new requirement has come in.

> The function should support both uppercase and lowercase letters, and score correctly. The lowercase letters have the same values as their uppercase equivalents.

Go through the TDD process (write a failing test -> update the implementation so that the test passes -> refactor where/if needed) to support/meet this requirement.

### 🎫 Ticket 6 - Multiple letters

Now that we have a tested function for single letters, we can confidently use it to calculate the score for words with multiple letters.

Let's move on to words with multiple letters using the `calculateScrabbleWordScore` function.

If we wanted to unit test the `calculateScrabbleWordScore` function, we would want to mock the `calculateScrabbleLetterScore` function so that `calculateScrabbleWordScore` is tested in isolation (without depending on the `calculateScrabbleLetterScore` function).

For this workshop, we'll leave that for a bonus challenge for you. Instead, we'll write what could be described as an integration test for `calculateScrabbleWordScore` by using the `calculateScrabbleLetterScore` function.

1. Write a failing test for `calculateScrabbleWordScore` with a word containing more than one letter. Choose a word and calculate its expected score.
2. Update the `calculateScrabbleWordScore` function so the new test passes, making sure to use `calculateScrabbleLetterScore`.
3. Review the code. Refactor or simplify if necessary, and then re-run the tests to ensure they still pass after any changes.
4. Repeat steps 1-3 for additional words with multiple letters. You can choose any words you like.

This process will help ensure that our function works correctly for more complex inputs by integrating the single letter scoring logic.

## 🎉 Conclusion

Congratulations on completing the TDD workshop! Here are the key takeaways:

- Write tests before code.
- Follow the TDD cycle: red -> green -> refactor.
- Write simple and minimal code to pass tests.
- Refactor code to improve it while ensuring tests still pass.

Keep practicing TDD in your future projects to build robust and maintainable code. Happy coding!
