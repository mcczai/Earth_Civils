console.info('这是加热配方分割线')

ServerEvents.recipes(event => {

   event.custom({                                                             //史莱姆粘液(工业)
                "type": "create:mixing",
                "ingredients": [
                  {"tag": "forge:sand"},{"tag": "forge:dusts/aluminum"},{"tag": "forge:dusts/iron"},{"tag": "minecraft:coals"}
                ],
                "results": [
                  {"fluid": "create_things_and_misc:slime","amount": 800}
                ],
                      "heatRequirement": "heated"
              })

   event.custom({                                                             //史莱姆粘液(生物)
                "type": "create:mixing",
                "ingredients": [
                  {"item": "supplementaries:soap"},{"item": "supplementaries:soap"},{"tag": "forge:flour/wheat"},{"tag": "forge:flour/wheat"},{"tag": "forge:flour/wheat"},{"tag": "forge:flour/wheat"},{"fluid": "minecraft:water","amount": 1000}
                ],
                "results": [
                  {"fluid": "create_things_and_misc:slime","amount": 400}
                ],
              })

   event.custom({                                                             //粘液球
                "type": "create:mixing",
                "ingredients": [
                  {"fluid": "create_things_and_misc:slime","amount": 100},{"fluid": "minecraft:water","amount": 50}
                ],
                "results": [
                  {"item": "minecraft:slime_ball","count":1}
                ],
                      "heatRequirement": "heated"
              })
})
