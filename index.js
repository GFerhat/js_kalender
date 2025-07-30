let datumAktuell = new Date();
console.log(datumAktuell);
let datum = datumAktuell.getDate();
console.log(datum);
let monat = datumAktuell.getMonth() +1;
let monatName;
 
const wochentagArray = [" Sonntag "," Montag "," Dienstag "," Mittwoch "," Donnerstag "," Freitag "," Samstag "];
let wochentagNum = datumAktuell.getDay();
let wochentag = wochentagArray[wochentagNum];
console.log(wochentag);

function monatWochenRechner {
  wochentagArray.getDay
}

let monatNummer
if (monat == 1) {
  monatName = 'Januar';
} else if (monat == 2) {
  monatName = 'Februar';
} else if (monat == 3) {
  monatName = 'März';
} else if (monat == 4) {
  monatName = 'April';
} else if (monat == 5) {
  monatName = 'Mai';
} else if (monat == 6) {
  monatName = 'Juni';
} else if (monat == 7) {
  monatName = 'Juli';
} else if (monat == 8) {
  monatName = 'August';
} else if (monat == 9) {
  monatName = 'September';
} else if (monat == 10) {
  monatName = 'Oktober';
} else if (monat == 11) {
  monatName = 'November';
} else {
  monatName = 'Dezember';
}

console.log('Monat ausgeschrieben: ' + monatName)
if (monat < 10) {
  monat = "0" + (monat);
}
console.log(monat);
let jahr = datumAktuell.getFullYear();
console.log(jahr);

let monatwoche;
if (datum < 7) {
  monatwoche = 1;
} else if (datum < 14) {
  monatwoche = 2;
} else if (datum < 21) {
  monatwoche = 3; 
} else if (datum < 28) {
  monatwoche = 4;
} else {
  monatwoche = 5;
}

function vollesDatum() { //Funktion erstellt das heutige Datum
  return datum + '.' + monat + "." + jahr + " ";
  
}
console.log(vollesDatum());

console.log('Die ' + monatwoche + ' Woche des Monats ' + monatName);

document.getElementById("datumHistorie").innerHTML = monatName;
document.getElementById("datumInfo").innerHTML = vollesDatum();
document.getElementById("wochentagInfo1").innerHTML = wochentag;
document.getElementById("wochentagInfo2").innerHTML = wochentag;
document.getElementById("zahlWochentag").innerHTML = monatwoche + "te";