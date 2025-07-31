let datumAktuell = new Date();
console.log(datumAktuell);
let datumTag = datumAktuell.getDate();
console.log("aktueller Tag " + datumTag);
let monat = datumAktuell.getMonth();


const wochentagArray = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
let wochentagNum = datumAktuell.getDay();
console.log("Wochentagindex " + wochentagNum);
let wochentag = wochentagArray[wochentagNum];
console.log("Wochentag: " + wochentag);


function tageBisMontagCalc(wochentagNum) { //Rechnet den aktuellen Tag -1 bis Montag
  let tageBisMontag=0;
  while (wochentagNum !== 1 ) { 
  tageBisMontag++;
  wochentagNum--;
  if (wochentagNum < 0) {
      wochentagNum=6;
    }
  }
return tageBisMontag;
}
let tageBisMontag = tageBisMontagCalc(wochentagNum);
tageBisMontagCalc(tageBisMontag);
console.log(tageBisMontag);

const monatArray = ["Januar", "Februar", "März", "April","Mai","Juni", 
  "Juli", "August", "September", "Oktober", "November", "Dezember"]
let monatNum=datumAktuell.getMonth();
console.log("Monatindex: " + monatNum);
let monatName = monatArray[monatNum];
console.log("Name des Monats:" + monatName)

if (monat < 10) {
  monat = "0" + (monat+1);
}
console.log(monat);
let jahr = datumAktuell.getFullYear();
console.log(jahr);

let monatwoche;
if (datumTag < 7) {
  monatwoche = 1;
} else if (datumTag < 14) {
  monatwoche = 2;
} else if (datumTag < 21) {
  monatwoche = 3; 
} else if (datumTag < 28) {
  monatwoche = 4;
} else {
  monatwoche = 5;
}

function vollesDatum() { //Funktion erstellt das heutige datumTag
  return datumTag + '.' + monat  + "." + jahr + " ";
}

console.log(vollesDatum());
console.log('Die ' + monatwoche + ' Woche des Monats ' + monatName);

document.getElementById("datumHistorie").innerHTML = monatName;
document.getElementById("datumInfo").innerHTML = vollesDatum();
document.getElementById("datumInfo1").innerHTML = vollesDatum();
document.getElementById("wochentagInfo1").innerHTML = wochentag;
document.getElementById("wochentagInfo2").innerHTML = wochentag;
document.getElementById("zahlWochentag").innerHTML = monatwoche + "te";