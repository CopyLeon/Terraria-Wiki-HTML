var items = {
    zenith: {
        value: "zenith",
        name: "Zenith",
        type: [
            "Weapon"
        ],
        damage: {
            "melee": 190
        },
        rarity: "red"
    },
    terra_blade: {
        value: "terra_blade",
        name: "Terra Blade",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 85
        },
        rarity: "yellow"
    },
    nights_edge: {
        value: "night's_edge",
        name: "Night's Edge",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 40
        },
        rarity: "orange"
    },
    volcano: {
        value: "volcano",
        name: "Volcano",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 40
        },
        rarity: "orange"
    },
    lights_bane: {
        value: "light's_bane",
        name: "Light's Bane",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 16,
            "slash_of_darkness": 8
        },
        rarity: "blue"
    },
    muramasa: {
        value: "muramasa",
        name: "Muramasa",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 24,
            "special_slash": 12
        },
        rarity: "green"
    },
    blade_of_grass: {
        value: "blade_of_grass",
        name: "Blade of Grass",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 18
        },
        rarity: "orange"
    },
    blood_butcherer: {
        value: "blood_butcherer",
        name: "Blood Butcherer",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 22
        },
        rarity: "blue"
    },
    copper_shortsword: {
        value: "copper_shortsword",
        name: "Copper Shortsword",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 5
        },
        rarity: "white"
    },
    enchanted_sword: {
        value: "enchanted_sword",
        name: "Enchanted Sword",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 23
        },
        rarity: "green"
    },
    excalibur: {
        value: "excalibur",
        name: "Excalibur",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 72
        },
        rarity: "pink"
    },
    true_excalibur: {
        value: "true_excalibur",
        name: "True Excalibur",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 72
        },
        rarity: "yellow"
    },
    meowmere: {
        value: "meowmere",
        name: "Meowmere",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": {
                "sword": 200,
                "projectile": 250
            }
        },
        rarity: "red"
    },
    star_wrath: {
        value: "star_wrath",
        name: "Star Wrath",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": {
                "sword": 170,
                "projectile": 170
            }
        },
        rarity: "red"
    },
    influx_waver: {
        value: "influx_waver",
        name: "Influx Waver",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 100
        },
        rarity: "yellow"
    },
    the_horsemans_blade: {
        value: "the_horseman's_blade",
        name: "The Horseman's Blade",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 150
        },
        rarity: "yellow"
    },
    seedler: {
        value: "seedler",
        name: "Seedler",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 50
        },
        rarity: "pink"
    },
    starfury: {
        value: "starfury",
        name: "Starfury",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": {
                "sword": 25,
                "star": 37.5
            }
        },
        rarity: "green"
    },
    bee_keeper: {
        value: "bee_keeper",
        name: "Bee Keeper",
        type: [
            "Weapon",
            "Crafting material"
        ],
        damage: {
            "melee": 30
        },
        rarity: "orange"
    }
};


//not past here
items = Object.keys(items).sort().reduce(
    (obj, key) => {
        obj[key] = items[key];
        return obj;
    },
    {}
);
items = {
    none: {
        value: "blank",
        name: "None",
        rarity: "gray"
    },... items
}