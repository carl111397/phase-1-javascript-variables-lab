const { expect } = require('chai');
require('./index.js');

describe('index.js', function () {
    it('companyName is set as Scuber', function () {
        expect(companyName).to.equal('Scuber');
    });
});