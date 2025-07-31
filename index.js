let datumAktuell = new Date();
let datumTag = datumAktuell.getDate();
let monat = datumAktuell.getMonth();


const wochentagArray = ["Sonntag","Montag","Dienstag","Mittwoch",
  "Donnerstag","Freitag","Samstag"];
let wochentagNum = datumAktuell.getDay();
let wochentag = wochentagArray[wochentagNum];


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
let monatName = monatArray[monatNum];

if (monat < 10) {
  monat = "0" + (monat+1);
}

let jahr = datumAktuell.getFullYear();

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
console.log('Die ' + monatwoche + ' Woche des Monats ' + monatName);

document.getElementById("kalenderblattHeadJs").innerHTML = monatName + " " + jahr;
document.getElementById("kalenderblattTitel").innerHTML = vollesDatum();
document.getElementById("datumHistorie").innerHTML = monatName;
document.getElementById("datumInfo").innerHTML = vollesDatum();
document.getElementById("datumInfo1").innerHTML = vollesDatum();
document.getElementById("wochentagInfo1").innerHTML = wochentag;
document.getElementById("wochentagInfo2").innerHTML = wochentag;
document.getElementById("zahlWochentag").innerHTML = monatwoche + "te";

let neujahr = datumAktuell.getDate(jahr,0,1);
let tagDerArbeit = datumAktuell.getDate(jahr,4,1);
let TDDE = datumAktuell.getDate(jahr,9,3);
let weihnachten1 = datumAktuell.getDate(jahr,11,25);
let weihnachten2 = datumAktuell.getDate(jahr,11,26);



function osterSonntagSpencer() {
let a = jahr % 19;
let b = Math.floor( jahr / 100 );
let c = jahr % 100;
let d = Math.floor( b / 4 );
let e = b % 4;
let f = Math.floor( (b + 8) / 25 );
let g = Math.floor( (b - f + 1) / 3 );
let h = ((19*a) + b - d - g + 15) % 30;
let i = Math.floor( c / 4 );
let k = c % 4;
let l = (32 + (2*e) + (2*i) - h - k) % 7;
let m = Math.floor( (a + (11*h) + (22*l)) / 451 );
let n = Math.floor( (h + l - (7*m) + 114) / 31 );
let o = (h + l - (7*m) + 114) % 31;
//0 is day 1 is month
return new Date(jahr, n-1, o + 1);
}
console.log(osterSonntagSpencer());
let ostern = osterSonntagSpencer();
console.log("ostern: ", ostern.toLocaleDateString("de-DE"));

let christiHimmelfahrt = new Date (ostern); 
christiHimmelfahrt.setDate(ostern.getDate()+39);
console.log("Himmelfahrt:", christiHimmelfahrt.toLocaleDateString("de-DE"));

let pfingsten = new Date (ostern);
pfingsten.setDate(ostern.getDate()+49)
console.log("Pfingsten:", pfingsten.toLocaleDateString("de-DE"));

let karfreitag = new Date(ostern);
karfreitag.setDate(ostern.getDate()-2);
console.log("Karfreitag:", )



