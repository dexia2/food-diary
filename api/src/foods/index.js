'use strict';

const errors = require('../errors');

exports.findAll = (req, res, next) => {
  const foods = [
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
    {'id': 14, 'foodGroup': '14' ,'name': 'ごま油'},
  ];

  res.status(200).json(foods);
};

exports.buggyRoute = (req, res, next) => {
  next(errors.newHttpError(400, 'bad request'));
};
