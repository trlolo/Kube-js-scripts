onEvent('recipes', (event) => {
 event.custom({
  "id":"gold_nuclear_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 131072,
  "duration": 250,
  "item_inputs": [
    {
      "item": "modern_industrialization:plutonium_block",
      "amount": 1,
      "probability" : 0.1
    },
    {
      "item": "minecraft:wheat_seeds",
      "amount": 9
    },
    {
      "item": "minecraft:gilded_blackstone",
      "amount": 64,
      "probability" : 0.3
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 6000
    },
    {
      "fluid": "modern_industrialization:tritium",
      "amount": 12000
    }
  ],
  "item_outputs":{
      "item": "minecraft:gold_block",
        "amount": 30,
        "probability" : 0.15
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:helium_3",
    "amount" : 12000
  }
})
})