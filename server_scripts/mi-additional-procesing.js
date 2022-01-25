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
      "amount": 500
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
  "duration": 400,
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
 event.custom({
  "id":"inert-cell-production",
  "type": "modern_industrialization:assembler",
  "eu": 8,
  "duration": 300,
  "item_inputs": [
  {
      "item": "modern_industrialization:gold_plate",
      "amount": 4
  },
  {
      "tag": "c:glass_panes",
      "amount": 1
  }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:soldering_alloy",
      "amount": 250
  },
  "item_outputs": {
      "item": "kubejs:inert_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"nitric-acid-production",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 1500,
  "item_inputs": {
      "item": "kubejs:inert_cell",
      "amount": 3
    },
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:nitrogen",
      "amount": 3000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 7500
    },
    {
      "fluid": "minecraft:water",
      "amount": 1500
    }
  ],
  "item_outputs": {
      "item": "kubejs:nitric_acid_cell",
      "amount": 3
  }
})
 event.custom({
  "id":"nitric-copper-disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 12,
  "duration": 500,
  "item_inputs": [
    {
      "item": "minecraft:raw_copper",
      "amount": 1
    },
    {
      "item": "kubejs:nitric_acid_cell",
      "amount": 6
    }
],
  "item_outputs": [
  {
      "item": "kubejs:impure_copper_ntrate",
      "amount": 2
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 6
  }
],
  "fluid_outputs" : [
  {
    "fluid" : "minecraft:water",
    "amount" : 3000
  },
  {
    "fluid" : "modern_industrialization:nitrogen",
    "amount" : 1000
  }
]
})
 event.custom({
  "id":"copper-nirate-exhange",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 4,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "kubejs:impure_copper_ntrate",
      "amount": 2
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 5
    }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 5000
  },
  "item_outputs": [
  {
      "item": "kubejs:impure_copper_chloride",
      "amount": 2
  },
  {
      "item": "kubejs:nitric_acid_cell",
      "amount": 5
  }
]
})
 event.custom({
  "id":"copper-chloride-purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_copper_chloride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 400
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1,
	  "probability" : 0.1
  },
  {
      "item": "kubejs:silver_chloride",
      "amount": 1,
	  "probability" : 0.3
  }
]
})
 event.custom({
  "id":"copper-chloride-electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 800,
  "item_inputs": {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:copper_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 2000
  }
})
 event.custom({
  "id":"silver-chloride-electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 12,
  "duration": 600,
  "item_inputs": {
      "item": "kubejs:silver_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:silver_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1000
  }
})
})