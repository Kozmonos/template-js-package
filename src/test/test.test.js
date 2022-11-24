const assert = require('assert');

describe('tests', async () => {
  before(() => console.log('about to run some test before'));
  it('is a subtest', () => {
    assert.equal(1,1);
  });
});