onEvent('recipes', (event) => {
 event.custom({
  "id":"dark_oak_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 32,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:dark_oak_sapling",
      "amount": 4,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 4
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:dark_oak_log",
      "amount": 32
    },
    {
      "item": "minecraft:dark_oak_sapling",
      "amount": 2
    },
    {
      "item": "minecraft:apple",
        "amount": 1,
        "probability" : 0.2
    }
  ]
})
 event.custom({
  "id":"oak_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:oak_sapling",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 2000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 2000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:oak_log",
      "amount": 5
    },
    {
      "item": "minecraft:oak_sapling",
      "amount": 1,
      "probability" : 0.5
    },
    {
      "item": "minecraft:apple",
        "amount": 1,
        "probability" : 0.3
    }
  ]
})
 event.custom({
  "id":"acacia_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:acacia_sapling",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 2000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 2000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:acacia_log",
      "amount": 8
    },
    {
      "item": "minecraft:acacia_sapling",
      "amount": 1,
      "probability" : 0.5
    }
  ]
})
 event.custom({
  "id":"birch_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:birch_sapling",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 2000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 2000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:birch_log",
      "amount": 6
    },
    {
      "item": "minecraft:birch_sapling",
      "amount": 1,
      "probability" : 0.5
    }
  ]
})
 event.custom({
  "id":"spruce_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:spruce_sapling",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:spruce_log",
      "amount": 7
    },
    {
      "item": "minecraft:spruce_sapling",
      "amount": 1,
      "probability" : 0.5
    }
  ]
})
 event.custom({
  "id":"jungle_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:jungle_sapling",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 2000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 2000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:jungle_log",
      "amount": 9
    },
    {
      "item": "minecraft:jungle_sapling",
      "amount": 1,
      "probability" : 0.5
    }
  ]
})
 event.custom({
  "id":"wheat_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 500,
  "item_inputs": [
    {
      "item": "minecraft:wheat_seeds",
      "amount": 7,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 3
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 6000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 6000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:wheat",
      "amount": 7
    },
    {
      "item": "minecraft:wheat_seeds",
      "amount": 12
    }
  ]
})
 event.custom({
  "id":"beetroot_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 700,
  "item_inputs": [
    {
      "item": "minecraft:beetroot_seeds",
      "amount": 5,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": [
    {
      "item": "minecraft:beetroot",
      "amount": 5
    },
    {
      "item": "minecraft:beetroot_seeds",
      "amount": 9
    }
  ]
})
 event.custom({
  "id":"melon_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:melon_seeds",
      "amount": 4,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 2,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:melon",
      "amount": 4
    }
})
 event.custom({
  "id":"pumpkin_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:pumpkin_seeds",
      "amount": 4,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 2,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:pumpkin",
      "amount": 4
    ]
})
 event.custom({
  "id":"sugar_cane_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 650,
  "item_inputs": [
    {
      "item": "minecraft:sugar_cane",
      "amount": 8,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 3,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:sugar_cane",
      "amount": 8
    }
})
 event.custom({
  "id":"bamboo_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 24,
  "duration": 400,
  "item_inputs": [
    {
      "item": "minecraft:bamboo",
      "amount": 16,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 4,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 8
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 8000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 16000
    }
  ],
  "item_outputs": {
      "item": "minecraft:bamboo",
      "amount": 64
    }
})
 event.custom({
  "id":"kelp_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 1200,
  "item_inputs": [
    {
      "item": "minecraft:kelp",
      "amount": 10,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 16000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:kelp",
      "amount": 10
    }
})
 event.custom({
  "id":"cactus_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 600,
  "item_inputs": [
    {
      "item": "minecraft:cactus",
      "amount": 4,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 4000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:cactus",
      "amount": 4
    }
})
 event.custom({
  "id":"red_mushroom_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 12,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:red_mushroom",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 12000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:red_mushroom",
      "amount": 14
    }
})
 event.custom({
  "id":"red_mushroom_farming",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 12,
  "duration": 1000,
  "item_inputs": [
    {
      "item": "minecraft:brown_mushroom",
      "amount": 1,
      "probability" : 0.0
    },
    {
      "item": "minecraft:dirt",
      "amount": 1,
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 4
    }
  ],
  "fluid_inputs": [
    {
      "fluid": "minecraft:water",
      "amount": 12000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 8000
    }
  ],
  "item_outputs": {
      "item": "minecraft:brown_mushroom",
      "amount": 15
    }
})
})