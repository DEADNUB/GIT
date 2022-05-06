/**
 * Uebung 3: Maps
 */

/**
 * 1) Erstelle die Map.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");


  let reis = {}
  art: "langkorn",
  zusatz:"Geribene Äpfel", "Zwiebel"
  magich: true
  console.debug(reis)

}
/**
 * 2) Rufe keys, value und entries auf.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let selfmade = {
    name: "Deine Mutter",
    gruendung: 1992,
    medium: "Rare"
  }

  //ToDo: füge ab hier in den debugs Deinen Code ein
  console.debug()
  console.debug()
  console.debug()
}

/**
 * 3) Erstelle eine weitere Map.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  //ToDo: füge ab hier Deinen Code ein

  for (let key of Object.keys(kuenstler)) {
    console.debug(key + ": " + kuenstler[key])
  }
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
}
main()