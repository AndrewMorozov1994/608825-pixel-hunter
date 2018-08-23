import {assert} from 'chai';
import {changeLevel, calculateAnswerTimeType, calculateScores, calculateLifes} from '../gameCount.js';

describe(`Results`, () => {

  describe(`Scores count`, () => {
    it(`should return 350 if minimum score`, () => {
      assert.equal(calculateScores([0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 0), 350);
    });
    it(`should return 1150 if no lifes left and normal type answers`, () => {
      assert.equal(calculateScores([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 1150);
    });
    it(`should return 1650 if maximum score`, () => {
      assert.equal(calculateScores([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 1650);
    });
    it(`should return 0 if less than 0 lifes`, () => {
      assert.equal(calculateScores([3, 3, 3, 3, 3, 3, 0, 0, 0, 0], -1), 0);
    });
  });

  describe(`Answer type depending on answer timing`, () => {
    it(`should return answer type 0 if time out`, () => {
      assert.equal(calculateAnswerTimeType(0), 0);
      assert.equal(calculateAnswerTimeType(-1), 0);
    });
    it(`should return 3 if value > 20`, () => {
      assert.equal(calculateAnswerTimeType(20.1), 3);
      assert.equal(calculateAnswerTimeType(30), 3);
    });
    it(`should return 1 if value < 10`, () => {
      assert.equal(calculateAnswerTimeType(0.1), 1);
      assert.equal(calculateAnswerTimeType(9.9), 1);
    });
    it(`should return 2 if timer value is normal`, () => {
      assert.equal(calculateAnswerTimeType(10), 2);
      assert.equal(calculateAnswerTimeType(20), 2);
    });
  });

  describe(`Lifes count`, () => {
    it(`should return 3 if right answer and max lifes`, () => {
      assert.equal(calculateLifes(3, 1), 3);
    });
    it(`should return -1 if wrong answer and no lifis`, () => {
      assert.equal(calculateLifes(0, 0), -1);
    });
    it(`should return 3 if right fast answer and max lives`, () => {
      assert.equal(calculateLifes(3, 3), 3);
    });

    it(`should return 1 if wrong answer and two lifis`, () => {
      assert.equal(calculateLifes(2, 0), 1);
    });
  });

  describe(`Game change levels`, () => {
    it(`should return maxLevel if value >= maxLevel`, () => {
      assert.equal(changeLevel(9), 9);
      assert.equal(changeLevel(10), 9);
    });
    it(`should return 0 if value <= minLevel`, () => {
      assert.equal(changeLevel(0), 0);
      assert.equal(changeLevel(-1), 0);
    });
    it(`should return 3 if value is 3`, () => {
      assert.equal(changeLevel(3), 3);
    });
  });

});
