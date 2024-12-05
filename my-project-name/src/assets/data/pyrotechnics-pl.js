import penta from '../images/penta.png';
import rockets from '../images/rockets.png';
import tnt from '../images/tnt.png';
import dynamite from '../images/dynamite.png';
import anfo from '../images/anfo.png';

export const pyrotechnicsPL = [
  { 
    name: 'PETN (Pentaerythritol Tetranitrate)', 
    img: penta, 
    description: 'Bardzo wybuchowy materiał wykorzystywany w wojskowości.',
    detailedDescription: `
      Fakty:
      - PETN to azotan organiczny, stosowany głównie w przemyśle militarnym i w produkcji materiałów wybuchowych.
      - W przemyśle PETN może być stosowany w precyzyjnych procesach, które wymagają dużej siły detonacji.

      Mity:
      - PETN jest używane tylko w wojsku – to nieprawda, wykorzystywane jest również w przemyśle cywilnym.
    `
  },
  { 
    name: 'Dynamit', 
    img: dynamite, 
    description: 'Znany materiał wybuchowy używany w górnictwie.',
    detailedDescription: `
      Fakty:
      - Dynamit został wynaleziony przez Alfreda Nobla w 1867 roku, jest szeroko stosowany w górnictwie, budownictwie i eksploracji geologicznej.
      - Dynamit składa się głównie z nitrogliceryny, stabilizowanej innymi substancjami.

      Mity:
      - Dynamit jest niebezpieczny – nowoczesne metody produkcji sprawiają, że jest bezpieczniejszy w użyciu, pod warunkiem przestrzegania zasad.
    `
  },
  { 
    name: 'TNT (Trinitrotoluene)', 
    img: tnt, 
    description: 'Stabilny i szeroko stosowany materiał wybuchowy.',
    detailedDescription: `
      Fakty:
      - TNT to jeden z najstarszych materiałów wybuchowych, stosowany głównie w wojsku i w niektórych procesach przemysłowych.
      - TNT jest stosunkowo stabilny, łatwy w produkcji i transporcie.

      Mity:
      - TNT jest niebezpieczne i niestabilne – w rzeczywistości jest to jeden z najbardziej stabilnych materiałów wybuchowych.
    `
  },
  { 
    name: 'ANFO (Azotan amonu z olejem napędowym)', 
    img: anfo, 
    description: 'Potężny materiał wybuchowy używany w górnictwie.',
    detailedDescription: `
      Fakty:
      - ANFO to jeden z najtańszych i najpopularniejszych materiałów wybuchowych, wykorzystywany głównie w przemyśle górniczym.
      - Jest łatwy do wytworzenia i stosunkowo stabilny.

      Mity:
      - ANFO jest łatwe do wyprodukowania – choć jest stosunkowo łatwy do wytworzenia, jego produkcja jest ściśle regulowana.
    `
  },
  { 
    name: 'Rakiety pirotechniczne', 
    img: rockets, 
    description: 'Rakiety pirotechniczne tworzące kolorowe pokazy na niebie.',
    detailedDescription: `
      Fakty:
      - Rakiety pirotechniczne wybuchają na dużej wysokości, tworząc kolorowe efekty.
      - Związki chemiczne takie jak stront, miedź czy baryt nadają rakietom różne kolory.

      Mity:
      - Rakiety są całkowicie bezpieczne – niewłaściwe obchodzenie się z rakietami może prowadzić do poważnych wypadków.
    `
  },
];