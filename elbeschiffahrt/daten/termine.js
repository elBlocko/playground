/*
  Termine der Personenschiffahrt Oberelbe
  =======================================
  Diese Datei kann ohne Programmierkenntnisse gepflegt werden.
  Datum immer im Format 'JJJJ-MM-TT'. Vergangene Termine werden automatisch
  ausgegraut (Sonderfahrten) bzw. ausgeblendet (Fahrplanänderungen).

  Sonderfahrten: ['Datum', 'Fahrt', Status, abweichende Abfahrt]
    Fahrt:  'weihnachten' | 'brunch' | 'grillfahrt' | 'musik'
    Status: null = Plätze frei, 'full' = ausgebucht
    Abfahrt: nur angeben, wenn sie von der normalen Zeit abweicht, z. B. '13:30'

  Fahrplanänderungen: ['Datum', 'Text']
    z. B. ['2027-05-12', 'Keine Linienfahrt'],
          ['2027-06-03', 'Wegen Niedrigwasser nur bis Kurort Rathen'],
*/
window.PSO_TERMINE = {
  sonderfahrten: [
    ['2026-11-29', 'weihnachten'],
    ['2026-11-30', 'weihnachten'],
    ['2026-12-01', 'brunch', 'full'],
    ['2026-12-03', 'weihnachten'],
    ['2026-12-07', 'weihnachten'],
    ['2026-12-08', 'weihnachten'],
    ['2026-12-09', 'weihnachten'],
    ['2026-12-10', 'weihnachten'],
    ['2026-12-13', 'weihnachten'],
    ['2026-12-14', 'weihnachten', null, '13:30'],
    ['2026-12-15', 'weihnachten'],
    ['2026-12-16', 'weihnachten'],
  ],
  aenderungen: [
  ],
};
