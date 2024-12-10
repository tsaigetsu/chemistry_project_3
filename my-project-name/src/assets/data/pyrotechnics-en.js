import penta from '../images/penta.png';
import rockets from '../images/rockets.png';
import tnt from '../images/tnt.png';
import dynamite from '../images/dynamite.png';
import anfo from '../images/anfo.png';

export const pyrotechnicsEN = [
  { 
    name: 'GIN', 
    img: penta,
    alcoholContent: '47%',
    description: 'A distilled spirit flavored with juniper berries and other botanicals, it’s a key ingredient in cocktails like the gin and tonic.',
    facts: `
      Gin is made by distilling botanicals, which sets it apart from vodka.
      Gin originated in the Netherlands, where it was called genever
    `,
    myths: `
      Gin is just "vodka with juniper."
      Gin originated in England
    `
  },
  { 
    name: 'Whisky', 
    img: dynamite,
    alcoholContent: '50%',
    description: 'A distilled spirit made from grains, aged in barrels, and produced in regions like Scotland, Ireland, the USA, and Canada.',
    facts: `
      They differ in production process, taste, and even spelling (whisky vs. whiskey).
      Some prefer it neat or with a drop of water to release its aromas
    `,
    myths: `
      Scotch whisky and Irish whiskey are the same.
      Whisky tastes best with ice
    `
  },
  { 
    name: 'Absinthe', 
    img: anfo,
    alcoholContent: '80%',
    description: 'A strong alcoholic drink made from wormwood, anise, and fennel, famously known as the "Green Fairy" due to its color and mysterious reputation.',
    facts: `
      The chemical compound thujone, found in wormwood, was once believed to be hallucinogenic, but modern studies have debunked this claim.
      While it was banned in the early 20th century, absinthe is now legal in most countries under certain regulations
    `,
    myths: `Absinthe causes hallucinations.Absinthe is banned in most countries
    `
  },
  { 
    name: 'Cognac', 
    img: rockets,
    alcoholContent: '40%',
    description: 'A premium type of brandy made exclusively in the Cognac region of France, aged in oak barrels.',
    facts: `
      Authentic cognac must come from the Cognac region and follow strict production rules.
      Older cognacs may have more complex flavors, but younger ones are equally valued for their freshness
    `,
    myths: `
      Cognac can be made anywhere.
      The older the cognac, the better
    `
  },
  { 
    name: 'Martini', 
    img: tnt,
    description: 'Martini refers to both a classic cocktail and a type of vermouth (aromatized wine) with a herbal flavor, served on its own or as a base for mixed drinks.',
    facts: `
      It can also be garnished with lemon, a cocktail onion, or other accompaniments.
      Martini is also a brand of vermouth that can be enjoyed on its own
    `,
    myths: `
      Martini is always served with an olive.
      Martini is just a cocktail
    `
  },
];
