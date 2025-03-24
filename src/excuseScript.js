let who = "Yo";
let action = ["correr","comer","caminar"];
let what = ["mucho","poco","rapido"];
let when = ["ayer","mañana","antier"];

let showme1 = Math.floor(Math.random() * action.length);
let showme2 = Math.floor(Math.random() * what.length);
let showme3 = Math.floor(Math.random() * when.length);

//document.querySelector("#excuse").innerHTML = who + action[showme1] + what[showme2] + when[showme3];

console.log(who + " " + action[showme1] + " " + what[showme2] + " " +  when[showme3]);