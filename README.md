# Test driven development (TDD)

Test driven development means writing tests first, before writing code. The tests define what the code should do. Then you write code to pass the tests. Writing tests first helps you think through what the code needs to do. It also helps make sure the code stays organised and easy to change later. We'll use Vitest to write and run tests easily.

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about TDD! Here's a glimpse of what you'll be achieving by the end of this workshop:

- Object 1: Write software using a TDD approach
- Object 2: Applying the TDD cycle (red -> green -> refactor)
- Object 3: Having a disciplined focus on writing the simplest, minimal working implementation to pass a failing test

## 🎟️ TICKETS

Your manager has tasked you with creating a `calculateScrabbleScore` function that takes in a word and returns a correctly calculated scrabble score for that word.

- Your tests will go in `scrabble-score.test.js`.
- Your implementation will go in `scrabble-score.js`. If you look there, a basic skeleton for the function has already been created and exported for you.

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
