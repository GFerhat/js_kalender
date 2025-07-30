let datumAktuell = new Date();
console.log(datumAktuell);
let datum = datumAktuell.getDate();
console.log(datum);
let monat = datumAktuell.getMonth() +1;
let monatText;

let monatNummer
if (monat == 1) {
  monatText = 'Januar';
} else if (monat == 2) {
  monatText = 'Februar';
} else if (monat == 3) {
  monatText = 'März';
} else if (monat == 4) {
  monatText = 'April';
} else if (monat == 5) {
  monatText = 'Mai';
} else if (monat == 6) {
  monatText = 'Juni';
} else if (monat == 7) {
  monatText = 'Juli';
} else if (monat == 8) {
  monatText = 'August';
} else if (monat == 9) {
  monatText = 'September';
} else if (monat == 10) {
  monatText = 'Oktober';
} else if (monat == 11) {
  monatText = 'November';
} else {
  monatText = 'Dezember';
}

console.log('Monat ausgeschrieben: ' +monatText)

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

function datumGanzAusgeben() { //Funktion erstellt das heutige Datum
  return datum + '.' + monat + "." + jahr;
  
}
console.log(datumGanzAusgeben());

console.log('Die ' + monatwoche + ' Woche des Monats ' + monatText);
