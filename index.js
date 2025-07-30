let datumHeute = new Date();
let datum = datumHeute.getDate();
let kalenderwoche;

if (datum < 7) {
    kalenderwoche = 1
} else if (datum < 14) {
    kalenderwoche = 2
} else if (datum < 21) {
    kalenderwoche = 3
} else if (datum < 28) {
    kalenderwoche = 4
} else {
    kalenderwoche = 5
}


console.log(datum);
console.log(kalenderwoche);
