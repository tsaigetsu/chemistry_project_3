import beerImg from '../images/beer.png';
import wineImg from '../images/wine.png';
import vodkaImg from '../images/vodka.png';
import rumImg from '../images/rum.png';
import tequilaImg from '../images/tequila.png';

export const alcoholsEN = [
  { 
    name: 'Beer', 
    img: beerImg, 
    alcoholContent: '5%', 
    description: 'A refreshing pale lager with a crisp taste.',
    facts: `Moderate beer consumption (1-2 beers a day) can reduce the risk of heart disease
    `,
    myths:`Beer is a mild drink and has little impact on the body – in reality, excessive beer consumption can lead to liver damage and other serious health issues
    ` 
  },
  { 
    name: 'Wine', 
    img: wineImg, 
    alcoholContent: '12%', 
    description: 'A rich red wine with a complex flavor profile.',
    facts: `Wine, especially red, contains antioxidants like resveratrol, which may help fight aging and prevent heart disease`,
    myths:`Wine is healthy, so you can drink more – excessive wine consumption leads to health issues like addiction and liver disease` 
  },
  { 
    name: 'Vodka', 
    img: vodkaImg, 
    alcoholContent: '40%', 
    description: 'A clean spirit, perfect for cocktails.',
    facts:`Vodka is one of the purest alcoholic beverages with fewer additives compared to other spirits`,
    myths:`Vodka keeps you warm – alcohol causes the dilation of blood vessels, which can actually result in heat loss` 
  },
  { 
    name: 'Rum', 
    img: rumImg, 
    alcoholContent: '37.5%', 
    description: 'A sweet rum perfect for cocktails.',
    facts: `Moderate rum consumption has a relaxing effect`,
    myths:`Rum boosts libido – alcohol in excess can actually impair sexual activity` 
  },
  { 
    name: 'Tequila', 
    img: tequilaImg, 
    alcoholContent: '40%', 
    description: 'A smooth tequila ideal for shots and cocktails.',
    facts: `In moderate amounts, tequila can aid digestion`,
      myths:`Tequila is "clean" and safe – drinking tequila in excess can still lead to serious health problems
    ` 
  },
];
