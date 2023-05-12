console.info('这是流体合成更改分割线')

ServerEvents.recipes(event => {
   event.custom({                                                             //肥皂合成
       "type": "create:mixing",
       "ingredients": [
         {"count":4,"item": "supplementaries:ash"},{"item": "minecraft:porkchop"},{"amount": 1000,"fluid": "minecraft:water"}
       ],
       "results": [
         {"count":6,"item": "supplementaries:soap"}
       ]
     })

   event.custom({                                                             //面团(农夫乐事)
       "type": "create:mixing",
       "ingredients": [
         {"count":3,"item": "minecraft:wheat"},{"amount": 1000,"fluid": "minecraft:water"}
       ],
       "results": [
         {"count":3,"item": "farmersdelight:wheat_dough"}
       ]
     })

   event.custom({                                                             //面团(农夫乐事)
       "type": "create:mixing",
       "ingredients": [
         {"count":3,"item": "minecraft:wheat"},{"amount": 1000,"fluid": "minecraft:water"}
       ],
       "results": [
         {"count":3,"item": "farmersdelight:wheat_dough"}
       ]
     })

   event.custom({                                                             //纸合成
          "type": "create:mixing",
          "ingredients": [
            {"count":4,"item": "immersiveengineering:dust_wood"},{"amount": 1000,"fluid": "minecraft:water"}
          ],
          "results": [
            {"count":2,"item": "minecraft:paper"}
          ]
        })

   event.custom({                                                             //红石酸合成
             "type": "create:mixing",
             "ingredients": [
               {"count":4,"item": "minecraft:redstone"},{"amount": 1000,"fluid": "minecraft:water"}
             ],
             "results": [
               {"amount":1000,"fluid": "immersiveengineering:redstone_acid"}
             ]
           })

   event.custom({                                                             //面团合成(农夫乐事)
                "type": "create:mixing",
                "ingredients": [
                  {"item": "create:wheat_flour"},{"amount": 1000,"fluid": "minecraft:water"}
                ],
                "results": [
                  {"item": "create:dough"}
                ]
              })

})