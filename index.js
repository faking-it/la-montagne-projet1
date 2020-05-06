#!/usr/bin/env node

console.log(process.argv);

const { getCode, getName } = require("country-list");
console.log(getName("IS"));

const ora = require("ora");
const spinner = ora("Loading unicorns").start();
setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading ...";
}, 1000);

const axios = require("axios");
axios
  .get("https://date.nager.at/api/v2/publicholidays/2020/BE")
  .then(function (response) {
    response.data.map(item => console.log(item.date, item.name));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

spinner.stopAndPersist();
