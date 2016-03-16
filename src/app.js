'use strict';
var binder = require('./utils/binder');
var renderer = require('./renderer');
var ItemsModel = require('./models/items');
var ItemsView = require('./views/items');
var ItemsIntent = require('./intents/items');

window.onload = function () {
  binder(ItemsModel, ItemsView, ItemsIntent);
  renderer.init();
};
