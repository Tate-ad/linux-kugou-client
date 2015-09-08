/* global document, alert, Handlebars, MediaElementPlayer*/

var gui = require("nw.gui");
var win = gui.Window.get();
var kgcli = require("node-kugou-client");

var localStorage = win.window.localStorage;

var kugou = angular.module("kugou", []);

