onEvent('recipes', (event) => {
 event.custom({
  "id":"acetylene_trimirization",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "modern_industrialization:carbon_dust",
      "amount": 16,
	  "probability" : 0.0
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:acetylene",
      "amount": 3000
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:benzene",
    "amount" : 1000
    }
})
 event.custom({
  "id":"benzene_methelation",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 400,
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:benzene",
      "amount": 1000
    },
    {
      "fluid": "modern_industrialization:methane",
      "amount": 1000
    },
    {
      "fluid": "modern_industrialization:chlorine",
      "amount": 1000
    }
],
  "fluid_outputs" : [
    {
    "fluid" : "modern_industrialization:toluene",
    "amount" : 1000
    },
    {
    "fluid" : "modern_industrialization:hydrochloric_acid",
    "amount" : 2000
    }
]
})
})