import penta from '../images/penta.png';
import rockets from '../images/rockets.png';
import tnt from '../images/tnt.png';
import dynamite from '../images/dynamite.png';
import anfo from '../images/anfo.png';

export const pyrotechnicsEN = [
  { 
    name: 'PETN', 
    img: penta, 
    description: 'A highly explosive material used in the military.',
    facts: `
      - PETN is an organic nitrate, primarily used in the military and explosives manufacturing.
      - In industry, PETN is used for precision applications requiring high detonation force.
    `,
    myths:`
      - PETN is only used in the military – this is false, as it is also used in civilian industries.
    `
  },
  { 
    name: 'Dynamite', 
    img: dynamite, 
    description: 'A well-known explosive used in mining.',
    facts: `
      - Dynamite was invented by Alfred Nobel in 1867 and is widely used in mining and construction.
      - Dynamite is a more stable explosive than nitroglycerin.
    `,
    myths:`
      - Dynamite is dangerous for regular use – while it is dangerous, it is controlled and handled properly in mining and demolition.
    `
  },
  { 
    name: 'ANFO', 
    img: anfo, 
    description: 'A common explosive used in mining and construction.',
    facts: `
      - ANFO (Ammonium Nitrate Fuel Oil) is a widely used explosive, primarily in mining and quarrying.
      - It is relatively inexpensive and safe to handle when used properly.
    `,
    myths:`
      - ANFO is harmless and only used in small quantities – large amounts can be extremely dangerous, especially when mishandled.
    `
  },
  { 
    name: 'Rockets', 
    img: rockets, 
    description: 'High-powered rockets often used for fireworks and military applications.',
    facts: `
      - Rockets are designed to produce a large thrust and are used in both entertainment (fireworks) and defense sectors.
      - Rockets can be powered by various fuels including solid and liquid propellants.
    `,
    myths:`
      - Rockets only have military uses – rockets are also widely used in fireworks and space exploration.
    `
  },
  { 
    name: 'TNT', 
    img: tnt, 
    description: 'A powerful explosive commonly used in demolition and military applications.',
    facts: `
      - TNT (Trinitrotoluene) is one of the most commonly used explosives in demolition.
      - It is known for its stability and safety in handling compared to other explosives.
    `,
    myths:`
      - TNT is too dangerous to use safely – TNT is stable and relatively safe when handled correctly.
    `
  },
];
