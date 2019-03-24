'use strict';

const chai = require('chai');
const expect = chai.expect;
const foods = require('./index');

describe('foods - UT', () => {

  describe('findAll()', () => {

    it('lists all foods', (done) => {
      // Stub req
      const reqStub = null;

      // Mock res
      const resMock = {};
      resMock.status = (statusCode) => {
        expect(statusCode).to.equal(200);
        return resMock.status;
      };
      resMock.status.json = (json) => {
        const expectedfoods = [
          {'id': 1, 'foodGroup': '1' , 'name': '玄米'},
          {'id': 2, 'foodGroup': '2' ,'name': 'さつまいも'},
          {'id': 3, 'foodGroup': '3' ,'name': '黒砂糖'},
          {'id': 4, 'foodGroup': '4' ,'name': 'あずき　全粒　乾'},
          {'id': 5, 'foodGroup': '5' ,'name': 'ぎんなん　生'},
          {'id': 6, 'foodGroup': '6' ,'name': 'アスパラガス　若茎　生'},
          {'id': 7, 'foodGroup': '7' ,'name': 'いちご　生'},
          {'id': 8, 'foodGroup': '8' ,'name': 'しいたけ　生しいたけ　菌床栽培　生'},
          {'id': 9, 'foodGroup': '9' ,'name': 'ひじき　ほしひじき　鉄釜　ゆで'},
          {'id': 10, 'foodGroup': '10' ,'name': 'あなご　蒸し'},
          {'id': 11, 'foodGroup': '11' ,'name': 'うし　かた　脂身つき　生'},
          {'id': 12, 'foodGroup': '12' ,'name': '鶏卵　卵黄　ゆで'},
          {'id': 13, 'foodGroup': '13' ,'name': '普通牛乳'},
          {'id': 14, 'foodGroup': '14' ,'name': 'ごま油'}
        ];

        expect(json).to.deep.equal(expectedfoods);
        done();
      };

      // Stub next
      const nextStub = null;

      // Run unit under test
      foods.findAll(reqStub, resMock, nextStub);
    });
  });

  describe('buggyRoute()', () => {

    it('passes an error along', (done) => {
      // Stub req
      const reqStub = null;

      // Stub res
      const resStub = null;

      // Mock next
      const nextMock = (err) => {
        expect(err.status).to.equal(400)
        expect(err.message).to.equal('bad request');
        done();
      };

      // Run unit under test
      foods.buggyRoute(reqStub, resStub, nextMock);
    });

  });

});
