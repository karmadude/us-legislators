#!/usr/bin/env node

let data = require("../data/legislators-current");

let stats = {
  senate: {},
  house: {}
}

let Religions = {
  Protestant: "Christian",
  Methodist: "Christian",
  "Latter Day Saints": "Christian",
  Baptist: "Christian",
  Presbyterian: "Christian",
  Catholic: "Christian",
  Episcopalian: "Christian",
  "Roman Catholic": "Christian",
  Christian: "Christian",
  "African Methodist Episcopal": "Christian",
  "Christian Scientist": "Christian",
  "Seventh Day Adventist": "Christian",
  Lutheran: "Christian",
  Nazarene: "Christian",
  "United Methodist": "Christian",
  "Southern Baptist": "Christian",
  "Church of Christ": "Christian",
  Jewish: "Jewish",
  Unknown: "Unknown",
  undefined: "None",
}

function updateStat(stat, statTypeKey, valueKey) {
  let values = stat[statTypeKey];

  if (!values) {
    values = stat[statTypeKey] = {};
  }

  if (statTypeKey === "religion") {
    valueKey = Religions[valueKey] || valueKey;
  }

  if (!values[valueKey]) {
    values[valueKey] = 0;
  }
  values[valueKey]++;  
}

data.forEach(d => {
  let term = d.terms[d.terms.length - 1];
  let stat = term.type === "rep" ? stats.house : stats.senate;

  updateStat(stat, "party", term.party);
  updateStat(stat, "gender", d.bio.gender);
  updateStat(stat, "religion", d.bio.religion);
});

console.log(stats);
