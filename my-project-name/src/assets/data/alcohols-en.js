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
    facts: `
      - Beer contains B vitamins and minerals like potassium and magnesium, which may support the cardiovascular system.
      - Moderate beer consumption (1-2 beers a day) can reduce the risk of heart disease.
    `,
    myths:`
      - Beer "causes belly fat" – this is a myth, as weight gain results more from excessive calorie consumption rather than the beer itself.
      - Beer is a mild drink and has little impact on the body – in reality, excessive beer consumption can lead to liver damage and other serious health issues.
    ` 
  },
  { 
    name: 'Wine', 
    img: wineImg, 
    alcoholContent: '12%', 
    description: 'A rich red wine with a complex flavor profile.',
    facts: `
      Facts:
      - Wine, especially red, contains antioxidants like resveratrol, which may help fight aging and prevent heart disease.
      - Moderate consumption (1 glass a day) has cardiovascular benefits.
    `,
    myths:`
      Myths:
      - Wine is healthy, so you can drink more – excessive wine consumption leads to health issues like addiction and liver disease.
      - Wine helps with weight loss – this is a myth, as wine contains alcohol and calories that can contribute to weight gain.
    ` 
  },
  { 
    name: 'Vodka', 
    img: vodkaImg, 
    alcoholContent: '40%', 
    description: 'A clean spirit, perfect for cocktails.',
    facts:`
      - Vodka is one of the purest alcoholic beverages with fewer additives compared to other spirits.
      - Moderate vodka consumption can help relax and improve mood.
    `,
    myths:`
      - Vodka is "healthier" than other spirits – excessive vodka consumption can cause serious liver and heart damage.
      - Vodka keeps you warm – alcohol causes the dilation of blood vessels, which can actually result in heat loss.
    ` 
  },
  { 
    name: 'Rum', 
    img: rumImg, 
    alcoholContent: '37.5%', 
    description: 'A sweet rum perfect for cocktails.',
    facts: `
      - Rum contains higher alcohol content, so it has a stronger effect on the body.
      - Moderate rum consumption has a relaxing effect.
    `,
    myths:`
      - Rum has medicinal properties – while it can have antiseptic effects, excessive drinking leads to serious health issues.
      - Rum boosts libido – alcohol in excess can actually impair sexual activity.
    ` 
  },
  { 
    name: 'Tequila', 
    img: tequilaImg, 
    alcoholContent: '40%', 
    description: 'A smooth tequila ideal for shots and cocktails.',
    facts: `
      - Tequila made from 100% agave contains fewer additives, making it a cleaner spirit.
      - In moderate amounts, tequila can aid digestion.
    `,
      myths:`
      - Tequila is "clean" and safe – drinking tequila in excess can still lead to serious health problems.
      - Tequila is more effective than other alcohols – the speed of intoxication depends on the individual’s tolerance, not the type of alcohol.
    ` 
  },
];
