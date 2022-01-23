onEvent('recipes', (event) => {
 event.custom({
  "id":"hydrogen_3_to_helium_3",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 1,
  "duration": 45000,
  "item_inputs":[
    {
      "item": "modern_industrialization:plutonium_block",
      "amount": 1,
      "probability" : 0.0
    },
	{
      "item": "modern_industrialization:uranium_235_block",
      "amount": 1,
      "probability" : 0.0
    }
],
  "fluid_inputs":{
      "fluid": "modern_industrialization:tritium",
      "amount": 12000
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:helium_3",
    "amount" : 12000
  }
})
 event.custom({
  "id":"plutoinum_to_uranium_235",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 1,
  "duration": 350000,
  "item_inputs":[
    {
      "item": "modern_industrialization:plutonium_dust",
      "amount": 3,
    }
],
  "item_outputs":{
      "item": "modern_industrialization:uranium_235_dust",
        "amount": 3,
        "probability" : 0.9
}
})
})