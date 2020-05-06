#!/usr/bin/env node

//Récupération du PAYS dans l'input + date courante
const country = process.argv[2];
const date = new Date().getFullYear();

//Country-list
const { getCode, getName } = require("country-list");

//Mise en page
console.log(
  "\n---------------------------------------------------------------------------------"
);
console.log(
  "\n                            Public holidays in " +
    getName(getCode(country))
);
console.log(
  "\n---------------------------------------------------------------------------------"
);

//Effet de chargement
const ora = require("ora");
const spinner = ora("\nLoading ...\n").start();
setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading ...";
}, 1000);

//Exploitation de l'API public holidays
const axios = require("axios");
axios
  .get(
    "https://date.nager.at/api/v2/publicholidays/" +
      date +
      "/" +
      getCode(country)
  )
  .then(function (response) {
    response.data.map(item => console.log(item.date, item.name));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

//Fin du chargement
spinner.stopAndPersist();
