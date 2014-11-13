"use strict";

var Client = require('./src/Client');

var myClient = new Client();

myClient.connect('192.168.1.104', 5250);
