onEvent('recipes', (event) => {
 event.custom({
  "id":"log_pyrolysis",
  "type": "modern_industrialization:blast_furnace",
  "eu": 32,
  "duration": 800,
  "item_inputs": {
      "tag": "minecraft:logs",
      "amount": 5
    },
  "item_outputs": {
      "item": "modern_industrialization:carbon_dust",
      "amount": 2
    },
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 3000
  }
 })
 event.custom({
  "id":"kelp_pyrolysis_oil",
  "type": "modern_industrialization:blast_furnace",
  "eu": 32,
  "duration": 600,
  "item_inputs": {
      "item": "minecraft:kelp",
      "amount": 20
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:crude_oil",
    "amount" : 1000
  }
 })
})