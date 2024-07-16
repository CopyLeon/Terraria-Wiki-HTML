var types = ["Weapon", "Crafting material"];
var damage = 0;
var knockback = 0;
var critical_chance = 0;
var use_time = 0;
var velocity = 0;
var rarity = [
  "gray",
  "white",
  "blue",
  "green",
  "orange",
  "light_red",
  "pink",
  "light_purple",
  "lime",
  "yellow",
  "cyan",
  "red",
  "purple",
  "rainbow",
  "fiery_red",
  "amber",
];
var sell = {
  copper: 0,
  silver: 0,
  gold: 0,
  platinum: 0,
};
var research = 0;

var filters = [
  ["Types", types],
  ["Damage", damage.toString()],
  ["Rarity", rarity],
  ["Sell", JSON.stringify(sell)],
  ["Knockback", knockback.toString()],
  ["Critical Chance", critical_chance.toString()],
  ["Use Time", use_time.toString()],
  ["Velocity", velocity.toString()],
  ["Research", research.toString()],
];
