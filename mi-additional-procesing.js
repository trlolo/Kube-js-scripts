onEvent('recipes', (event) => {
 event.custom({
  "id":"sulfuric-uranium-disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "modern_industrialization:raw_uranium",
      "amount": 1
    },
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:sulfuric_acid",
      "amount": 4000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 10000
    }
  ],
  "item_outputs": {
      "item": "kubejs:impure_uranium_sulfate",
      "amount": 3
  },
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 4000
  }
})
 event.custom({
  "id":"uranium-sulfate-purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 500,
  "item_inputs": {
      "item": "kubejs:impure_uranium_sulfate",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 8000,
	  "probability" : 0.05
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_uranium_sulfate",
      "amount": 1
  },
  {
      "item": "kubejs:lead_sulfate",
      "amount": 1,
	  "probability" : 0.3
  }
]
})
 event.custom({
  "id":"uranium-sulfate-electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 700,
  "item_inputs": {
      "item": "kubejs:pure_uranium_sulfate",
      "amount": 1
  },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 1000
  },
  "item_outputs": {
      "item": "kubejs:uranium_trioxide",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:sulfuric_acid",
    "amount" : 1000
  }
})
 event.custom({
  "id":"uranium-trioxide-electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 1000,
  "item_inputs": {
      "item": "kubejs:uranium_trioxide",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:uranium_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 3000
  }
})
 event.custom({
  "id":"lead-sulfate-electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 24,
  "duration": 700,
  "item_inputs": {
      "item": "kubejs:lead_sulfate",
      "amount": 1
  },
  "item_outputs": {
      "item": "kubejs:lead_sulfide",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 4000
  }
})
 event.custom({
  "id":"lead-sulfide-electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 300,
  "item_inputs": {
      "item": "kubejs:lead_sulfide",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:lead_dust",
      "amount": 1
  },
  {
      "item": "modern_industrialization:sulfur_dust",
      "amount": 1
  }
]
})
})