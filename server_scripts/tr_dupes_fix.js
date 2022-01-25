onEvent('recipes', (event) => {
    const id = [
    'techreborn:blast_furnace/iron_ingot_from_rail',
    'techreborn:blast_furnace/iron_ingot_from_minecart',
	'techreborn:industrial_grinder/copper_ingot_with_mercury',
	'techreborn:industrial_grinder/iron_ingot_with_mercury',
	'techreborn:industrial_grinder/gold_ingot_with_mercury',
    ];
    id.forEach((id) => {
        event.remove({ id: id });
    });
  
    event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 140,
  "heat": 1000,
  "ingredients" : [
    {
      "item": "minecraft:minecart"
    },
    {
      "item": "minecraft:sand"
    }
  ],
  "results" : [
    {
      "item": "minecraft:iron_ingot",
      "count": 4
    },
    {
      "item": "techreborn:dark_ashes_dust"
    }
  ]
})
    event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 140,
  "heat": 1000,
  "ingredients" : [
    {
      "item": "minecraft:rail",
	  "count":16
    },
    {
      "item": "minecraft:sand"
    }
  ],
  "results" : [
    {
      "item": "minecraft:iron_ingot",
      "count": 3
    },
    {
      "item": "techreborn:dark_ashes_dust"
    }
  ]
})

})