const options = {//foramtiert mit korrekter 0 falls 1 digit zahl.
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
};

let datumAktuell = new Date();
let datumTag = datumAktuell.getDate();//Tag
let monat = datumAktuell.getMonth();//Monat
let jahr = datumAktuell.getFullYear();//Jahr
let heutigesDatumDeutsch = datumAktuell.toLocaleDateString("de-DE", options);
console.log(heutigesDatumDeutsch);

const wochentagArray = ["Sonntag","Montag","Dienstag","Mittwoch",
  "Donnerstag","Freitag","Samstag"];
let wochentagNum = datumAktuell.getDay();
let wochentag = wochentagArray[wochentagNum];


function tageBisMontagCalc(wochentagNum) { //Rechnet den aktuellen Tag -1 bis Montag
  let tageBisMontag = 0;
  while (wochentagNum !== 1) {
    tageBisMontag++;
    wochentagNum--;
    if (wochentagNum < 0) {
      wochentagNum = 6;
    }
  }
  return tageBisMontag;
}
let tageBisMontag = tageBisMontagCalc(wochentagNum);
tageBisMontagCalc(tageBisMontag);
console.log("minus", tageBisMontag, "Tage sind inside Month");

//gibt der Variable monatName immer den Aktuellen monat als String.
const monatArray = ["Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"]
let monatNum = datumAktuell.getMonth();
let monatName = monatArray[monatNum];

if (monat < 10) {
  monat = "0" + (monat + 1);//Monat Januar wäre 0 Will ich nicht also +1
}

function vollesDatum() { //Funktion erstellt das heutige datumTag
  return datumTag + '.' + monat + "." + jahr + " ";
}

//Berechnet in welcher Monatwoche wir uns befinden. 
// Monatwoche != Kalenderwoche
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

//überschreibt ins HTML Dokument
//Kalenderblatt
document.getElementById("kalenderblattHeadJs").innerHTML = monatName + " " + jahr;
document.getElementById("kalenderblattTitel").innerHTML = vollesDatum();
//Historie
document.getElementById("datumHistorie").innerHTML = monatName;
//Infotext
document.getElementById("datumInfo").innerHTML = vollesDatum();
document.getElementById("datumInfo1").innerHTML = vollesDatum();
document.getElementById("wochentagInfo1").innerHTML = wochentag;
document.getElementById("wochentagInfo2").innerHTML = wochentag + " ";
document.getElementById("zahlWochentag").innerHTML = monatwoche + "te";
document.getElementById("monatNameJs").innerHTML = " " + monatName;

//Holiday Abteilung:
function osterSonntagSpencer() { //Spencer algorythm um osternDate zu ermitteln, egal in welchem Jahr
  let a = jahr % 19;
  let b = Math.floor(jahr / 100);
  let c = jahr % 100;
  let d = Math.floor(b / 4);
  let e = b % 4;
  let f = Math.floor((b + 8) / 25);
  let g = Math.floor((b - f + 1) / 3);
  let h = ((19 * a) + b - d - g + 15) % 30;
  let i = Math.floor(c / 4);
  let k = c % 4;
  let l = (32 + (2 * e) + (2 * i) - h - k) % 7;
  let m = Math.floor((a + (11 * h) + (22 * l)) / 451);
  let n = Math.floor((h + l - (7 * m) + 114) / 31);
  let o = (h + l - (7 * m) + 114) % 31;
  return new Date(jahr, n - 1, o + 1); //n ist der Monat o ist der Tag
}


let osternDate = osterSonntagSpencer();
let ostern = osternDate.toLocaleDateString("de-DE", options)

//berechnet die vom Ostern abhängigen Feiertage- + / - addiert / subtrahiert Tage
let ostermontag = new Date(osternDate);
ostermontag.setDate(osternDate.getDate() + 1);
ostermontag = ostermontag .toLocaleDateString("de-DE", options);

let christiHimmelfahrt = new Date(osternDate);
christiHimmelfahrt.setDate(osternDate.getDate() + 39);
christiHimmelfahrt = christiHimmelfahrt.toLocaleDateString("de-DE", options);

let pfingsten = new Date(osternDate);
pfingsten.setDate(osternDate.getDate() + 49);
pfingsten = pfingsten.toLocaleDateString("de-DE", options);

let karfreitag = new Date(osternDate);
karfreitag.setDate(osternDate.getDate() - 2);
karfreitag = karfreitag.toLocaleDateString("de-DE", options);

//feste Feiertage
//toLocalDateString wandelt das Datum in einen deutschen String
let neujahr = new Date(jahr, 0, 1);
let formatNeujahr = neujahr.toLocaleDateString("de-DE", options);

let tagDerArbeit = new Date(jahr, 4, 1);
let formatTagDerArbeit = tagDerArbeit.toLocaleDateString("de-DE", options);

let TDDE = new Date(jahr, 9, 3);
let formatTDDE = TDDE.toLocaleDateString("de-DE", options)

let weihnachten1 = new Date(jahr, 11, 25);
let formatWeihnachten1 = weihnachten1.toLocaleDateString("de-DE", options);

let weihnachten2 = new Date(jahr, 11, 26);
let formatWeihnachten2 = weihnachten2.toLocaleDateString("de-DE", options);

const feiertagArray = [formatNeujahr, formatWeihnachten1, formatWeihnachten2, formatTDDE, 
  formatTagDerArbeit, ostern, karfreitag, pfingsten, christiHimmelfahrt, ostermontag]

//sagt dem HTML infotext ob es sich im "ein" oder "kein" Feiertag handelt.
if (feiertagArray.includes(heutigesDatumDeutsch)) { 
  document.getElementById("obFeiertag").innerHTML= "ein ";
} else {
  document.getElementById("obFeiertag").innerHTML= "kein ";
}
