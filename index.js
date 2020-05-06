#!/bin/env node

GET / PublicHolidays / { Year } / { CountryCode };
console.log("Hello, Node.JS!");
const { getCode, getName } = require("country-list");
console.log(getName("IS"));
