#!/usr/bin/env node

console.log("Hello, Node.JS!");

const { getCode, getName } = require("country-list");
console.log(getName("IS"));

const axios = require("axios");
axios
  .get("https://date.nager.at/api/v2/publicholidays/2020/BE")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

const ora = require("ora");
const spinner = ora("Loading unicorns").start();
setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
}, 1000);
