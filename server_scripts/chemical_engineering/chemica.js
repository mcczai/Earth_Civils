ServerEvents.recipes(event => {
   event.custom({                                                             //二氧化硫
       "type": "create:mixing",
       "ingredients": [
         {"tag": "forge:dusts/sulfur"},{"tag": "caupona:ice"}
       ],
       "results": [
         {"fluid": "kubejs:sulfur_dioxide","amount": 50}
       ],
              "heatRequirement": "heated"
     })

   event.custom({                                                             //粗苯
       "type": "create:mixing",
       "ingredients": [
         {"item": "minecraft:coal"}
       ],
       "results": [
         {"fluid": "kubejs:crude_benzene","amount": 80}
       ],
              "heatRequirement": "heated"
     })
   event.custom({                                                             //硝基甲苯溶液
       "type": "create:mixing",
       "ingredients": [
         {"fluid":"kubejs:sulfuric_acid","amount": 20},{"fluid":"kubejs:nitric_acid","amount": 20},{"fluid":"kubejs:crude_benzene","amount": 20}
       ],
       "results": [
         {"fluid": "kubejs:nitrotoluene","amount": 50}
       ],
     })
   event.custom({                                                             //固体基甲苯
       "type": "create:mixing",
       "ingredients": [
         {"fluid":"kubejs:nitrotoluene","amount": 100},{"item": "kubejs:lime"}
       ],
       "results": [
         {"item": "kubejs:solid_nitrotoluene","count":4}
       ],
     })
   event.custom({                                                             //木炭出焦煤
     "type":"immersiveengineering:coke_oven",
     "creosote":100,
     "input":{"count":2,"item":"minecraft:charcoal"},
     "result":{"tag":"forge:coal_coke"},
     "time":1800
     })
   event.custom({                                                           //硫酸
     "type":"immersiveengineering:refinery",
     "energy":240,
     "input0":{"amount":6,"tag":"minecraft:water"},
     "input1":{"amount":8,"tag":"forge:sulfur_dioxide"},
     "result":{"amount":4,"fluid":"kubejs:sulfuric_acid"}
     })
   event.custom({                                                           //硝酸
     "type":"immersiveengineering:refinery",
     "catalyst":{"tag":"forge:dusts/saltpeter"},
     "energy":120,
     "input0":{"amount":6,"tag":"forge:sulfuric_acid"},
     "result":{"amount":4,"fluid":"kubejs:nitric_acid"}
     })
})