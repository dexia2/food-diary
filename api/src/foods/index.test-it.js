'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../../server');

chai.use(chaiHttp);

describe('Tasks - IT', () => {

  describe('GET /foods', () => {

    it('lists all foods', (done) => {
      chai.request(server)
        .get('/foods')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(3);
          done();
        });
    });

  });

  describe('POST /foods', () => {

    it('returns an error', (done) => {
      chai.request(server)
        .post('/foods')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('bad request');
          done();
        });
    });

  });

});
