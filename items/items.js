// Define an array of item objects
var items = [
  {
    value: "zenith",
    name: "Zenith",
    type: ["Weapon"],
    damage: { melee: 190 },
    rarity: "red",
  },
  {
    value: "terra_blade",
    name: "Terra Blade",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 85 },
    knockback: 6.5,
    critical_chance: 4,
    use_time: 18,
    velocity: 12,
    rarity: "yellow",
    sell: { copper: 0, silver: 0, gold: 20, platinum: 0 },
    research: 1,
  },
  {
    value: "night's_edge",
    name: "Night's Edge",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 40 },
    rarity: "orange",
  },
  {
    value: "volcano",
    name: "Volcano",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 40 },
    rarity: "orange",
  },
  {
    value: "light's_bane",
    name: "Light's Bane",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 16, slash_of_darkness: 8 },
    rarity: "blue",
  },
  {
    value: "muramasa",
    name: "Muramasa",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 24, special_slash: 12 },
    rarity: "green",
  },
  {
    value: "blade_of_grass",
    name: "Blade of Grass",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 18 },
    rarity: "orange",
  },
  {
    value: "star_wrath",
    name: "Star Wrath",
    type: ["Weapon", "Crafting material"],
    damage: { melee: { sword: 170, projectile: 170 } },
    rarity: "red",
  },
  {
    value: "influx_waver",
    name: "Influx Waver",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 100 },
    rarity: "yellow",
  },
  {
    value: "the_horseman's_blade",
    name: "The Horseman's Blade",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 150 },
    rarity: "yellow",
  },
  {
    value: "seedler",
    name: "Seedler",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 50 },
    rarity: "pink",
  },
  {
    value: "blood_butcherer",
    name: "Blood Butcherer",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 22 },
    rarity: "blue",
  },
  {
    value: "copper_shortsword",
    name: "Copper Shortsword",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 5 },
    rarity: "white",
  },
  {
    value: "enchanted_sword",
    name: "Enchanted Sword",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 23 },
    rarity: "green",
  },
  {
    value: "excalibur",
    name: "Excalibur",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 72 },
    rarity: "pink",
  },
  {
    value: "true_excalibur",
    name: "True Excalibur",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 72 },
    rarity: "yellow",
  },
  {
    value: "meowmere",
    name: "Meowmere",
    type: ["Weapon", "Crafting material"],
    damage: { melee: { sword: 200, projectile: 250 } },
    rarity: "red",
  },
  {
    value: "starfury",
    name: "Starfury",
    type: ["Weapon", "Crafting material"],
    damage: { melee: { sword: 25, star: 37.5 } },
    rarity: "green",
  },
  {
    value: "bee_keeper",
    name: "Bee Keeper",
    type: ["Weapon", "Crafting material"],
    damage: { melee: 30 },
    rarity: "orange",
  },
];

items.sort((a, b) => (a.value > b.value ? 1 : -1));

items = [
  {
    value: "blank",
    name: "None",
    rarity: "gray",
  },
  ...items,
];

function compileArray() {
  items.forEach((item, index) => {
    let x = "items[" + index + "]";
    killMe(item, index, x);
  });
}
function killMe(item, index, array) {
  if (Array.isArray(item)) {
    item.forEach((i, index) => {
      killMe(i, index, array + "[" + index + "]");
    });
  } else if (item instanceof Object) {
    for (const key in item) {
      killMe(item[key], index, array + "." + key);
    }
  } else {
    console.log(array + " = " + item);
  }
}
