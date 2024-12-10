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
    description: 'Orzeźwiające jasne piwo o wyrazistym smaku.',
    facts: `Umiarkowane spożycie piwa (1-2 piwa dziennie) może zmniejszyć ryzyko chorób serca`,
    myths:`Piwo to łagodny napój, który ma niewielki wpływ na organizm – w rzeczywistości nadmierne spożycie piwa może prowadzić do uszkodzenia wątroby i innych poważnych problemów zdrowotnych`
  },
  { 
    name: 'Wino', 
    img: wineImg, 
    alcoholContent: '12%', 
    description: 'Bogate czerwone wino o złożonym profilu smakowym.',
    facts: `Wino, szczególnie czerwone, zawiera antyoksydanty, takie jak resweratrol, które mogą pomóc w walce z procesami starzenia i zapobiegać chorobom serca`,
    myths:`Wino jest zdrowe, więc możesz pić więcej – nadmierne spożycie wina prowadzi do problemów zdrowotnych, takich jak uzależnienie i choroby wątroby`
  },
  { 
    name: 'Wódka', 
    img: vodkaImg, 
    alcoholContent: '40%', 
    description: 'Czysty alkohol, idealny do koktajli.',
    facts:`Wódka to jeden z najczystszych napojów alkoholowych, zawierający mniej dodatków w porównaniu do innych alkoholi`,
    myths:`Wódka ogrzewa – alkohol powoduje rozszerzenie naczyń krwionośnych, co w rzeczywistości może prowadzić do utraty ciepła`
  },
  { 
    name: 'Rum', 
    img: rumImg, 
    alcoholContent: '37.5%', 
    description: 'Słodki rum, idealny do koktajli.',
    facts: `Umiarkowane spożycie rumu ma działanie relaksujące`,
    myths:`Rum zwiększa libido – nadmierne spożycie alkoholu może w rzeczywistości zaburzać aktywność seksualną`
  },
  { 
    name: 'Tequila', 
    img: tequilaImg, 
    alcoholContent: '40%', 
    description: 'Gładka tequila, idealna do shotów i koktajli.',
    facts: `W umiarkowanych ilościach tequila może wspomagać trawienie`,
    myths:`Tequila jest "czysta" i bezpieczna – picie tequili w nadmiarze może nadal prowadzić do poważnych problemów zdrowotnych`
  },
];
