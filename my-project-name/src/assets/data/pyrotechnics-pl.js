import penta from '../images/penta.png';
import rockets from '../images/rockets.png';
import tnt from '../images/tnt.png';
import dynamite from '../images/dynamite.png';
import anfo from '../images/anfo.png';

export const pyrotechnicsPL = [
  { 
    name: 'PETN', 
    img: penta, 
    description: 'Bardzo wybuchowy materiał używany w wojsku.',
    facts: `
      - PETN to azotan organiczny, głównie używany w wojsku i produkcji materiałów wybuchowych.
      - W przemyśle PETN jest używany w precyzyjnych aplikacjach wymagających dużej siły detonacyjnej.
    `,
    myths:`
      - PETN jest wykorzystywany tylko w wojsku – to nieprawda, jest także wykorzystywany w przemyśle cywilnym.
    `
  },
  { 
    name: 'Dynamit', 
    img: dynamite, 
    description: 'Znany materiał wybuchowy używany w górnictwie.',
    facts: `
      - Dynamit został wynaleziony przez Alfreda Nobla w 1867 roku i jest szeroko stosowany w górnictwie i budownictwie.
      - Dynamit jest bardziej stabilnym materiałem wybuchowym niż nitrogliceryna.
    `,
    myths:`
      - Dynamit jest niebezpieczny do codziennego użytku – choć jest niebezpieczny, w górnictwie i rozbiórce jest stosowany w kontrolowany sposób.
    `
  },
  { 
    name: 'ANFO', 
    img: anfo, 
    description: 'Powszechnie stosowany materiał wybuchowy w górnictwie i budownictwie.',
    facts: `
      - ANFO (azotan amonu i olej opałowy) jest szeroko stosowanym materiałem wybuchowym, głównie w górnictwie i kamieniołomach.
      - Jest stosunkowo tani i bezpieczny w obsłudze, gdy jest odpowiednio używany.
    `,
    myths:`
      - ANFO jest nieszkodliwy i stosowany w małych ilościach – większe ilości mogą być niezwykle niebezpieczne, zwłaszcza jeśli nie są odpowiednio przechowywane.
    `
  },
  { 
    name: 'Rakiety', 
    img: rockets, 
    description: 'Rakiety o dużej mocy stosowane w sztuce pirotechnicznej i wojsku.',
    facts: `
      - Rakiety zaprojektowane są do wytwarzania dużego ciągu, stosowane zarówno w fajerwerkach, jak i w wojskowych zastosowaniach.
      - Rakiety mogą być napędzane przez różne paliwa, w tym stałe i ciekłe.
    `,
    myths:`
      - Rakiety mają tylko zastosowanie wojskowe – rakiety są także szeroko stosowane w fajerwerkach i eksploracji kosmosu.
    `
  },
  { 
    name: 'TNT', 
    img: tnt, 
    description: 'Potężny materiał wybuchowy stosowany głównie w rozbiórkach i wojsku.',
    facts: `
      - TNT (trinitrotoluen) jest jednym z najczęściej używanych materiałów wybuchowych w rozbiórkach.
      - Jest znany z stabilności i bezpieczeństwa w obsłudze w porównaniu do innych materiałów wybuchowych.
    `,
    myths:`
      - TNT jest zbyt niebezpieczne, by używać go bezpiecznie – TNT jest stabilne i stosunkowo bezpieczne, jeśli jest odpowiednio obsługiwane.
    `
  },
];
