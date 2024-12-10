import penta from '../images/penta.png';
import rockets from '../images/rockets.png';
import tnt from '../images/tnt.png';
import dynamite from '../images/dynamite.png';
import anfo from '../images/anfo.png';

export const pyrotechnicsPL = [
  { 
    name: 'GIN', 
    img: penta,
    alcoholContent: '47%',
    description: 'Destylowany alkohol aromatyzowany jagodami jałowca i innymi składnikami roślinnymi, stanowi kluczowy składnik koktajli, takich jak gin z tonikiem.',
    facts: `
      - Gin powstaje poprzez destylację roślin, co odróżnia go od wódki.
      - Gin pochodzi z Holandii, gdzie nazywany był genever.
    `,
    myths: `
      - Gin to po prostu "wódka z jałowcem."
      - Gin pochodzi z Anglii.
    `
  },
  { 
    name: 'Whisky', 
    img: dynamite,
    alcoholContent: '50%',
    description: 'Destylowany alkohol produkowany z ziaren, leżakowany w beczkach, wytwarzany w regionach takich jak Szkocja, Irlandia, USA i Kanada.',
    facts: `
      - Różnią się procesem produkcji, smakiem, a nawet pisownią (whisky vs. whiskey).
      - Niektórzy preferują ją pić czystą lub z kroplą wody, aby uwolnić jej aromaty.
    `,
    myths: `
      - Szkocka whisky i irlandzka whiskey to to samo.
      - Whisky najlepiej smakuje z lodem.
    `
  },
  { 
    name: 'Absinthe', 
    img: anfo,
    alcoholContent: '80%',
    description: 'Mocny alkohol wytwarzany z piołunu, anyżu i kopru włoskiego, znany jako "Zielona Wróżka" ze względu na swój kolor i tajemniczą reputację.',
    facts: `
      - Związek chemiczny tujon, obecny w piołunie, był kiedyś uważany za halucynogenny, ale nowoczesne badania obaliły ten mit.
      - Choć w początkach XX wieku był zakazany, obecnie absynt jest legalny w większości krajów pod pewnymi regulacjami.
    `,
    myths: `
      - Absynt powoduje halucynacje.
      - Absynt jest zakazany w większości krajów.
    `
  },
  { 
    name: 'Cognac', 
    img: rockets,
    alcoholContent: '40%',
    description: 'Ekskluzywny rodzaj brandy produkowany wyłącznie w regionie Cognac we Francji, dojrzewający w dębowych beczkach.',
    facts: `
      - Autentyczny koniak musi pochodzić z regionu Cognac i spełniać surowe zasady produkcji.
      - Starsze koniaki mogą mieć bardziej złożone smaki, ale młodsze są równie cenione za swoją świeżość.
    `,
    myths: `
      - Koniak można produkować gdziekolwiek.
      - Im starszy koniak, tym lepszy.
    `
  },
  { 
    name: 'Martini', 
    img: tnt,
    description: 'Martini odnosi się zarówno do klasycznego koktajlu, jak i do rodzaju wermutu (aromatyzowanego wina) o ziołowym smaku, serwowanego samodzielnie lub jako baza do drinków.',
    facts: `
      - Można je również udekorować cytryną, koktajlową cebulką lub innymi dodatkami.
      - Martini to także marka wermutu, który można pić samodzielnie.
    `,
    myths: `
      - Martini zawsze podaje się z oliwką.
      - Martini to tylko koktajl.
    `
  },
];
