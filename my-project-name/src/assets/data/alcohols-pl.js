import beerImg from '../images/beer.png';
import wineImg from '../images/wine.png';
import vodkaImg from '../images/vodka.png';
import rumImg from '../images/rum.png';
import tequilaImg from '../images/tequila.png';

export const alcoholsPL = [
  { 
    name: 'Piwo', 
    img: beerImg, 
    alcoholContent: '5%', 
    description: 'Orzeźwiające piwo o delikatnym smaku.',
    detailedDescription: `
      Fakty:
      - Piwo zawiera witaminy z grupy B, a także minerały, takie jak potas i magnez, które wspierają układ sercowo-naczyniowy.
      - Umiarkowane spożycie piwa (1-2 piwa dziennie) zmniejsza ryzyko chorób serca.

      Mity:
      - Piwo "puszcza brzuch" – to mit, ponieważ przyrost masy ciała wynika bardziej z nadmiernej konsumpcji kalorii niż samego piwa.
      - Piwo jest łagodne, więc nie wpływa mocno na organizm – w rzeczywistości picie piwa w nadmiarze może prowadzić do uszkodzenia wątroby.
    ` 
  },
  { 
    name: 'Wino', 
    img: wineImg, 
    alcoholContent: '12%', 
    description: 'Czerwone wino o bogatym smaku.',
    detailedDescription: `
      Fakty:
      - Wino, zwłaszcza czerwone, zawiera antyoksydanty, takie jak resweratrol, które mogą pomóc w walce z procesami starzenia i zapobiegać chorobom serca.
      - Umiarkowane picie (1 kieliszek dziennie) ma korzystny wpływ na zdrowie serca.

      Mity:
      - Wino jest zdrowe, więc można je pić w większych ilościach – nadmiar wina prowadzi do problemów zdrowotnych, takich jak uzależnienie i choroby wątroby.
      - Wino "odchudza" – to mit, ponieważ zawartość alkoholu i kalorii w winie może prowadzić do przyrostu wagi.
    ` 
  },
  { 
    name: 'Wódka', 
    img: vodkaImg, 
    alcoholContent: '40%', 
    description: 'Czysty alkohol, idealny do koktajli.',
    detailedDescription: `
      Fakty:
      - Wódka ma mało substancji chemicznych, przez co jest jednym z czystszych alkoholi.
      - Umiarkowane spożycie wódki poprawia nastrój i działa relaksująco.

      Mity:
      - Wódka jest "zdrowsza" od innych alkoholi – nadmierne picie wódki prowadzi do poważnych uszkodzeń wątroby i serca.
      - Wódka rozgrzewa – to złudne wrażenie, ponieważ alkohol powoduje rozszerzenie naczyń krwionośnych, co w dłuższej perspektywie prowadzi do utraty ciepła.
    ` 
  },
  { 
    name: 'Rum', 
    img: rumImg, 
    alcoholContent: '37.5%', 
    description: 'Słodki rum do koktajli.',
    detailedDescription: `
      Fakty:
      - Rum zawiera większe ilości alkoholu, co sprawia, że szybciej działa na organizm.
      - Umiarkowane picie rumu działa relaksująco.

      Mity:
      - Rum ma właściwości lecznicze – choć rum ma działanie antyseptyczne, nadmierne picie prowadzi do wielu problemów zdrowotnych.
      - Rum wzmacnia libido – to mit, alkohol może obniżyć aktywność seksualną.
    ` 
  },
  { 
    name: 'Tequila', 
    img: tequilaImg, 
    alcoholContent: '40%', 
    description: 'Gładka tequila do shotów i koktajli.',
    detailedDescription: `
      Fakty:
      - Tequila z 100% agawy zawiera mniej dodatków, co sprawia, że jest mniej szkodliwa.
      - W umiarkowanych ilościach wspomaga trawienie.

      Mity:
      - Tequila jest "czysta" i bezpieczna – nadmiar tequili prowadzi do problemów zdrowotnych.
      - Tequila jest bardziej efektywna niż inne alkohole – szybkość upojenia zależy od tolerancji organizmu, a nie od rodzaju alkoholu.
    ` 
  },
];