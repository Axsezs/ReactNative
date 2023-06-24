const SITE_NAME = "Information Technolgy";
const BASE_URL = "http://it.tni.ac.th";
const COLOR_THEME = "blue";
const ALLOW_SIGNUP = true;

console.log("Welcome to " + SITE_NAME);
let languages = ["JavaScript", "Python", "Ruby", "Java", "PHP"];
for (let i in languages) {
  let url = BASE_URL + "lang/" + languages[i].toLowerCase();
  console.log(`- ${languages[i]} Programming(${url})`);
}
console.log("Footer");

let Footer = ["About", "Privacy"];
for (let i in Footer) {
  let url = BASE_URL + " " + Footer[i].toLowerCase();
  console.log(`- ${Footer[i]} ((${url}))`);
}
if (ALLOW_SIGNUP) {
  console.log("[Sign up for new settle]");
}
console.log(` ${new Date().getFullYear()} ${SITE_NAME}`);
